package br.com.alura.screenmatch.principal;

import br.com.alura.screenmatch.model.DadosEpisodio;
import br.com.alura.screenmatch.model.DadosSerie;
import br.com.alura.screenmatch.model.DadosTemporada;
import br.com.alura.screenmatch.model.Episodio;
import br.com.alura.screenmatch.service.ConsumoApi;
import br.com.alura.screenmatch.service.ConverteDados;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.*;
import java.util.stream.Collectors;

public class Principal {

    private Scanner leitura = new Scanner(System.in);
    private ConsumoApi consumoApi = new ConsumoApi();
    private ConverteDados conversor = new ConverteDados();

    private final String ENDERECO = "https://www.omdbapi.com/?t=";
    private final String API_KEY = "&apiKey=6585022c";

    public void exibeMenu() {
        System.out.println("Digite o nome da série:");
        var serie = leitura.nextLine();

        // consulta api
        var json = consumoApi.obterDados(ENDERECO + serie.replace(" ", "+") + API_KEY);

        // serie
        System.out.println("\n--- Série ---");
        DadosSerie dados = conversor.obterDados(json, DadosSerie.class);
        System.out.println(dados);

        // temporada
        System.out.println("\n--- Temporada ---");
		List<DadosTemporada> temporadas = new ArrayList<>();
		for (int i = 1; i <= dados.totalTemporadas(); i++) {
			json = consumoApi.obterDados(ENDERECO + serie.replace(" ", "+") + "&season="+ i + API_KEY);
			DadosTemporada dadosTemporada = conversor.obterDados(json, DadosTemporada.class);
			temporadas.add(dadosTemporada);
		}
		temporadas.forEach(System.out::println);

        // episodios
//        for (int i = 0; i < dados.totalTemporadas(); i++) {
//            List<DadosEpisodio> episodios = temporadas.get(i).episodios();
//            for (DadosEpisodio episodio : episodios) {
//                System.out.println(episodio.titulo());
//            }
//        }

        // episodios
        temporadas.forEach(
                t -> t.episodios().forEach(
                        e -> System.out.println(e.titulo())
                )
        );

        // Top 5
        System.out.println("\n--- Top 5 episodios ---");
        List<DadosEpisodio> dadosEpisodios = temporadas.stream()
                .flatMap(t -> t.episodios().stream())
                .filter(f -> !f.avaliacao().equalsIgnoreCase("N/A"))
                .sorted(Comparator.comparing(DadosEpisodio::avaliacao).reversed())
                .limit(5)
                .collect(Collectors.toList());
        dadosEpisodios.forEach(System.out::println);

        // Lista de episodios
        System.out.println("\n--- Lista de episodios ---");
        List<Episodio> episodios = temporadas.stream()
                .flatMap(t -> t.episodios().stream()
                                .map(e -> new Episodio(t.numero(), e))
                        )
                .collect(Collectors.toList());
        episodios.forEach(System.out::println);

        System.out.println("\nA partir de que ano você deseja ver os episódios:");
        var ano = leitura.nextInt();
        leitura.nextLine(); // necessário após ler um int

        LocalDate data = LocalDate.of(ano, 1, 1);

        DateTimeFormatter dtf = DateTimeFormatter.ofPattern("dd/MM/yyyy");
        episodios.stream()
                .filter(e -> e.getDataLancamento() != null && e.getDataLancamento().isAfter(data))
                .forEach(e -> System.out.println(
                        "Temporada: " + e.getTemporada() +
                                " Episódio: " + e.getTitulo() +
                                " Data lançamento: " + e.getDataLancamento().format(dtf)
                ));

        // estatisticas
        System.out.println("\nMédia de avaliações por temporada");
        Map<Integer,Double> avaliacoesPorTemporada = episodios.stream()
                .filter(e -> e.getAvaliacao() > 0)
                .collect(Collectors.groupingBy(Episodio::getTemporada, Collectors.averagingDouble(Episodio::getAvaliacao)));
        System.out.println(avaliacoesPorTemporada);

        System.out.println("\nMédia de avaliações dos episódios");
        DoubleSummaryStatistics est = episodios.stream()
                .filter(e-> e.getAvaliacao() > 0)
                .collect(Collectors.summarizingDouble(Episodio::getAvaliacao));
        System.out.println("Qtd. de episódios: " + est.getCount());
        System.out.println("Soma das avaliações: " + est.getSum());
        System.out.println("Média das avaliações: " + est.getAverage());
        System.out.println("Menor e maior avaliação: " + est.getMin() + " e " +  est.getMax());
    }
}

package br.com.alura.fipe.principal;

import br.com.alura.fipe.model.Dados;
import br.com.alura.fipe.model.Modelos;
import br.com.alura.fipe.model.Veiculo;
import br.com.alura.fipe.service.ConsumoApi;
import br.com.alura.fipe.service.ConverteDados;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.Scanner;
import java.util.stream.Collectors;

public class Principal {
    private Scanner sc = new Scanner(System.in);
    private ConsumoApi consumoApi = new ConsumoApi();
    private ConverteDados converteDados = new ConverteDados();

    private final String URL_BASE = "https://parallelum.com.br/fipe/api/v1/";

    public void exibeMenu() {
        var menu = """
                * FIPE *
                --- MENU ---
                Carro
                Moto
                Caminhão
                
                Digite uma das opções para consultar:
                """;
        System.out.println(menu);
        var opcao = sc.nextLine();

        // buscar marcas do veículo
        String endereco = null;
        if (opcao.toLowerCase().contains("carr")) {
            endereco = URL_BASE + "carros/marcas";
        } else if  (opcao.toLowerCase().contains("mot")) {
            endereco = URL_BASE + "motos/marcas";
        } else {
            endereco = URL_BASE + "caminhoes/marcas";
        }

        var json = consumoApi.obterDados(endereco);
        var marcas = converteDados.obterLista(json, Dados.class);
        marcas.stream().sorted(Comparator.comparing(Dados::nome))
                .forEach(System.out::println);

        // buscar modelos da marca
        System.out.println("\nInforme o código da marca:");
        var marca = sc.nextLine();

        endereco += "/"+marca+"/modelos";
        json = consumoApi.obterDados(endereco);

        var modelosLista = converteDados.obterDados(json, Modelos.class);
        System.out.println("\nModelos da marca "+marca);
        modelosLista.modelos().stream().sorted(Comparator.comparing(Dados::nome))
                .forEach(System.out::println);

        // buscar anos do modelo
        var modelo = "";
        do {
            System.out.println("\nInforme o código para buscar os anos do modelo ou um trecho do nome para filtrar os modelos:");
             modelo = sc.nextLine();

            if (!modelo.matches("\\d+")) {
                String finalModelo = modelo;
                List<Dados> modelosFiltrados = modelosLista.modelos().stream()
                        .filter(m -> m.nome().toLowerCase().contains(finalModelo.toLowerCase()))
                        .sorted(Comparator.comparing(Dados::nome))
                        .collect(Collectors.toList());
                System.out.println("\nModelos filtrados");
                modelosFiltrados.forEach(System.out::println);
            }
        } while (!modelo.matches("\\d+"));

        endereco += "/"+modelo+"/anos";
        json = consumoApi.obterDados(endereco);

        List<Dados> anos = converteDados.obterLista(json, Dados.class);
        List<Veiculo> veiculos = new ArrayList<>();
        for (int i = 0; i < anos.size(); i++) {
            var enderecoAno = endereco + "/"+anos.get(i).codigo();
            json = consumoApi.obterDados(enderecoAno);
            Veiculo veiculo = converteDados.obterDados(json, Veiculo.class);
            veiculos.add(veiculo);
        }

        System.out.println("\nTodos os veiculos filtrados por ano");
        veiculos.forEach(System.out::println);
    }
}

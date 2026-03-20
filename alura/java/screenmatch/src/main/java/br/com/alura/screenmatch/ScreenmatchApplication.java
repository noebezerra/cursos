package br.com.alura.screenmatch;

import br.com.alura.screenmatch.principal.Principal;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@SpringBootApplication
public class ScreenmatchApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(ScreenmatchApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {

		Principal principal = new Principal();
		principal.exibeMenu();

		// Desafios

//		// Dada a lista de inteiros, encontre o maior número
//		List<Integer> numeros = Arrays.asList(10, 20, 30, 40, 50);
//		Optional<Integer> maior = numeros.stream().max(Integer::compareTo);
//		maior.ifPresent(System.out::println);
//
//		// Data a lista de palavras, agrupe-as pelo seu tamanho
//		// Resultado Esperado: {4=[java, code], 6=[stream, lambda]}
//		List<String> palavras = Arrays.asList("java", "stream", "lambda", "code");
//		Map<Integer, List<String>> group = palavras.stream()
//				.collect(Collectors.groupingBy(String::length));
//		System.out.println(group);
//
//		// Dada a lista de nomes abaixo, concatene-os separados por vírgula
//		// Resultado Esperado: "Alice, Bob, Charlie"
//		List<String> nomes = Arrays.asList("Alice", "Bob", "Charlie");
//		String nomesAlinhados = nomes.stream().collect(Collectors.joining(", "));
//		System.out.println(nomesAlinhados);
//
//		// Dada a lista de números inteiros abaixo, calcule a soma dos quadrados dos números pares
//		List<Integer> numerosi = Arrays.asList(1, 2, 3, 4, 5, 6);
//		numerosi.stream()
//				.filter(n -> n % 2 == 0)
//				.map(f -> f * f)
//				.reduce(0, Integer::sum);
//		System.out.println(numerosi);
//
//		// Dada uma lista de números inteiros, separe os números pares dos ímpares.
//		List<Integer> numerosii = Arrays.asList(1, 2, 3, 4, 5, 6);
//		List<Integer> pares = numerosii.stream()
//				.filter(e -> e % 2 == 0)
//				.toList();
//		List<Integer> impares = numerosii.stream()
//				.filter(e -> e % 2 != 0)
//				.toList();
//		System.out.println("Pares: "+pares+" Impares: "+impares);
//		Map<Boolean, List<Integer>> particionado = numerosii.stream()
//				.collect(Collectors.partitioningBy(e -> e % 2 == 0));
//		System.out.println("Pares: "+ particionado.get(true)+" Impares: "+ particionado.get(false));
	}
}

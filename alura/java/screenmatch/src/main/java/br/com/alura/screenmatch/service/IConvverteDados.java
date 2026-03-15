package br.com.alura.screenmatch.service;

public interface IConvverteDados {
    // T é um tipo genérico, informa que irá devolver algum tipo de dado não definido
    <T> T obterDados(String json, Class<T> classe);
}

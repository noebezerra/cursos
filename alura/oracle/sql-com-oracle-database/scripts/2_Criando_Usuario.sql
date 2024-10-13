-- A parir do oracle 12c nao e permitido criar os chamados usuarios locais por padrao
-- nomes de usuarios que nao iniciam com C## ou c##
-- o comando _oracle_script define um parametro de sessao nao documentada
-- funcionando como uma hack que permite a criacao de um usuario local sem o prefixo exigido 

ALTER SESSION SET "_ORACLE_SCRIPT" = TRUE;

CREATE USER cursoplsql IDENTIFIED BY cursoplsql DEFAULT TABLESPACE USERS; 

GRANT CONNECT, resource TO cursoplsql;

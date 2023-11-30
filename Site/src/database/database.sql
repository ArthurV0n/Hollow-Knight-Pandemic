create database hollowKnightPandemic;
use hollowKnightPandemic;
drop database hollowKnightPandemic;

create table usuario(
id int primary key auto_increment,
nome varchar(25),
senha varchar(20)
);

create table sugestao(
id int auto_increment,
descricao varchar(3000),
fkusuario int,
constraint pesquisausuariofk foreign key (fkusuario)
references usuario(id),
primary key(id, fkusuario)
);

select * from pesquisa;
create table pontuacao(
fkusuario int,
constraint pontuacaousuariofk foreign key (fkusuario)
references usuario(id),
pontos int
);
select max(pontos) from pontuacao where fkusuario = 1;

select *from usuario;

select *from pontuacao;


select max(pontos) from pontuacao join usuario on usuario.id = pontuacao.fkusuario where usuario.id = 1;

select max(pontos) from pontuacao where fkusuario = 1;



select max(pontos) from pontuacao join usuario on usuario.id = pontuacao.fkusuario where usuario.id = 1 = 1;

update pontuacao set pontos = ${qtdgeo} where fkusuario=1;

update pontuacao set pontos = 2 where fkusuario=1;

update pontuacao set pontos = 1 where fkusuario=1;





select pontos from pontuacao order by pontos desc limit 3;




select max(pontos) from pontuacao where fkusuario = 1;

select*from pontuacao;

TRUNCATE PONTUACAO;

insert into pontuacao values
(1,6);

 INSERT INTO pontuacao (pontos, fkusuario) VALUES (0,1);

SELECT id, nome, max(pontos) FROM usuario join pontuacao WHERE nome = 'admin' AND senha = '123456789@' group by id, nome;

SELECT id, nome, max(pontos) as pontos FROM usuario join pontuacao WHERE nome = '${nome}' AND senha = '${senha}' group by id, nome ;

INSERT INTO pontuacao (pontos, fkusuario) VALUES (1,1 );





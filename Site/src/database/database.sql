create database hollowKnightPandemic;
use hollowKnightPandemic;
drop database hollowKnightPandemic;

create table usuario(
id int primary key auto_increment,
nome varchar(25),
senha varchar(20)
);

create table pesquisa(
id int auto_increment,
descricao varchar(300),
fkusuario int,
constraint pesquisausuariofk foreign key (fkusuario)
references usuario(id),
primary key(id, fkusuario)
);


create table pontuacao(
fkusuario int,
constraint pontuacaousuariofk foreign key (fkusuario)
references usuario(id),
pontos int
);

select *from usuario;

select *from pontuacao;


select max(pontos) from pontuacao join usuario on usuario.id = pontuacao.fkusuario where usuario.id = 1;



INSERT INTO pontuacao (pontos, fkusuario) VALUES (1,1);


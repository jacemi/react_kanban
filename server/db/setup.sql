DROP DATABASE react_kanban;
DROP USER react_kanban_superuser;

CREATE USER react_kanban_superuser WITH ENCRYPTED PASSWORD 'password';
CREATE DATABASE react_kanban WITH OWNER react_kanban_superuser; 

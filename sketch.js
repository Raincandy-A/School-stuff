const semana = {
    "Segunda-feira": ["Estudar JavaScript", "Ir à academia", "Reunião de trabalho"],
    "Terça-feira": ["Comprar mantimentos", "Ler um livro", "Limpar a casa"],
    "Quarta-feira": ["Trabalhar no projeto pessoal", "Caminhada no parque", "Assistir a um filme"],
    "Quinta-feira": ["Estudar inglês", "Visitar um amigo", "Jogar videogame"],
    "Sexta-feira": ["Ir ao mercado", "Preparar o jantar especial", "Maratonar uma série"],
    "Sábado": ["Passeio com a família", "Ir ao cinema", "Relaxar em casa"],
    "Domingo": ["Preparar a semana", "Fazer um piquenique", "Meditar e descansar"]
};

// Exibir as tarefas de cada dia
for (const [dia, tarefas] of Object.entries(semana)) {
    console.log(`${dia}:`);
    tarefas.forEach(tarefa => console.log(`- ${tarefa}`));
}

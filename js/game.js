const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'));
const progressText = document.getElementById('progressText');
const scoreText = document.getElementById('score');
const progressBarFull = document.getElementById('progressBarFull');
const correctAudio = document.getElementById('correctAudio');
const incorrectAudio = document.getElementById('incorrectAudio');

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
{
    question: "¿Cómo se denomina a los equipos descartados que usan una fuente de energía para operar?",
    choice1: "RAE",
    choice2: "AEE",
    choice3: "RAEE",
    choice4: "Ninguna es correcta",
    answer: 3
},
{
    question: "¿A qué categoría de acuerdo con la Unión Europea pertenecen los CPU y celulares?",
    choice1: "2",
    choice2: "5",
    choice3: "1",
    choice4: "4",
    answer: 4
},
{
    question: "Una de las siguientes opciones no pertenece a la clasificación de los RAEE:",
    choice1: "Equipos Informáticos",
    choice2: "Desecho biológico",
    choice3: "Aparatos de alumbrado",
    choice4: "El enunciado miente y todas las opciones pertenecen a la clasificación",
    answer: 2
},
{
    question: "¿Cuál de los siguientes materiales se consideran altamente peligrosos para el Medio Ambiente?",
    choice1: "Cu",
    choice2: "Au",
    choice3: "Hg",
    choice4: "Pd",
    answer: 3
},
{
    question: "Tipo de sustancias que al quemarse produce sustancias más tóxicas que las originales:?",
    choice1: "Mercurio Sólido",
    choice2: "Dioxinas y Furanos",
    choice3: "Monóxido de Dihidrogeno",
    choice4: "Permanganato de Potasio",
    answer: 2
},
{
    question: "¿En cuál de las siguientes instalaciones no existe un proceso de desensamble o desarme de los residuos?",
    choice1: "Puntos Móviles",
    choice2: "Instalaciones de almacenamiento temporal",
    choice3: "Recolección domiciliar",
    choice4: "Instalaciones de recolección selectiva",
    answer: 2
},
{
    question: "¿Cuál es el tipo de lineamiento técnico de las RAEE que indica que se debe garantizar la protección contra la intemperie?",
    choice1: "Rutas",
    choice2: "Personal",
    choice3: "Transporte",
    choice4: "Ninguna es correcta",
    answer: 3
},
{
    question: "¿Con qué tipo de material se debe envolver la estiba de residuos que se transporta?",
    choice1: "Cartón",
    choice2: "Espuma",
    choice3: "Metal",
    choice4: "Plástico",
    answer: 4
},
{
    question: "Es un material presente en los monitores y televisores que al quebrarse puede contaminar con plomo:",
    choice1: "TRC",
    choice2: "Cables de monitores",
    choice3: "SSD",
    choice4: "Periféricos",
    answer: 1  
},
{
    question: "Este no es un material en el que no se requiere de cuidados especiales durante el transporte de residuos:",
    choice1: "Monitores y televisores",
    choice2: "Cartón",
    choice3: "Impresoras",
    choice4: "Periféricos",
    answer: 2
},
{
    question: "¿Qué componente no es resultado del proceso de desensamblaje de RAEE?",
    choice1: "Discos duros",
    choice2: "Baterías",
    choice3: "Software",
    choice4: "Pantallas",
    answer: 3
},
{
    question: "Es una consideración para un punto de recolección voluntaria móvil que trata sobre la entrada y salida de vehículos o maquinaria relacionada:",
    choice1: "Acceso",
    choice2: "Infraestructura",
    choice3: "Personal",
    choice4: "Recepción y almacenamiento temporal",
    answer: 1
},
{
    question: "¿Cuál es uno de los servicios básicos con los que debe contar un punto de entrega voluntaria?",
    choice1: "Servicio de agua potable",
    choice2: "Asesoramiento y orientación",
    choice3: "Análisis de residuos",
    choice4: "Servicios Informáticos",
    answer: 1
},
{
    question: "Es una descripción de procedimientos, medidas de seguridad y de protección personal:",
    choice1: "Estudio de riesgos",
    choice2: "Plan de señalización",
    choice3: "Monitoreo",
    choice4: "Manual de operaciones",
    answer: 4
},
{
    question: "¿Qué institución da seguimiento en El Salvador a los Puntos de Entrega Voluntaria?",
    choice1: "EPA",
    choice2: "INSIVUMEH",
    choice3: "MARN",
    choice4: "NOAA",
    answer: 3
},
{
    question: "Es un estudio de riesgos y plan de contingencia sobre posibles situaciones adversas:",
    choice1: "Estudio de riesgos",
    choice2: "Plan de señalización",
    choice3: "Monitoro",
    choice4: "Manual de operaciones",
    answer: 1
},
{
    question: "¿Qué significan las siglas RAEE? ",
    choice1: "Residuos de Aparatos Eléctricos y Electrónicos",
    choice2: "Recursos de Aparatos Energéticos y Ecológicos",
    choice3: "Regulaciones de Aparatos Electrónicos Esenciales",
    choice4: "Reutilización de Aparatos Eléctricos y Electrónicos",
    answer: 1
},
{
    question: "¿Cuál es uno de los principales desafíos en la gestión de los RAEE?",
    choice1: "Falta de normativas ambientales",
    choice2: "Escazes de materiales reciclables",
    choice3: "Baja generación de residuos elecrónicos",
    choice4: "Dificultad en la identificación de los productos",
    answer: 4
},
{
    question: "¿Qué concepto se refiere a la extensión de la vida útil de un producto? ",
    choice1: "Economía circular",
    choice2: "Obsolescencia programada",
    choice3: "Ciclo de vida",
    choice4: "Reutilización",
    answer: 1
},
{
    question: "¿Cuál es uno de los objetivos de la economía circular?",
    choice1: "Incrementar la producción de residuos",
    choice2: "Reducir el consumo de recursos naturales",
    choice3: "Fomentar la obsolescencia programada",
    choice4: "Aumentar la generación de productos desechables",
    answer: 2
},
{
    question: "¿Qué implica el concepto de cradle to cradle en la gestión de los RAEE?",
    choice1: "Reciclaje de productos sin control",
    choice2: "Reutilización de materiales sin procesos de calidad",
    choice3: "Diseño de productos pensando en su reutilización",
    choice4: "Eliminacion de productos sin considerar su impacto ambiental",
    answer: 3
},
{
    question: "¿Qué papel juegan los consumidores en la economía circular de los RAEE?",
    choice1: "Solo deben desechar los productos",
    choice2: "No tienen responsabilidad en la gestión de residuos",
    choice3: "Pueden contribuir con prácticas de consumo sostenible",
    choice4: "Deben comprar productos sin importar su impacto ambiental",
    answer: 3
},
{
    question: "¿Qué se busca minimizar en el enfoque de economía circular?",
    choice1: "La reutilización de materiales",
    choice2: "La generación de residuos",
    choice3: "La durabilidad de los productos",
    choice4: "El uso eficiente de recursos naturales",
    answer: 2
},
{
    question: "¿Cuál es uno de los principios de la economía circular?",
    choice1: "Producción masiva de productos desechables",
    choice2: "Consumo excesivo de recursos naturales",
    choice3: "Reutilización de materiales y productos",
    choice4: "Obsolescencia progrmada de productos",
    answer: 3
},
{
    question: "¿Qué se busca alargar en el ciclo de vida de los productos?",
    choice1: "La fase de producción",
    choice2: "La fase de uso",
    choice3: "La fase de reciclaje",
    choice4: "La fase de obsolescencia",
    answer: 2
},
{
    question: "¿Qué implica la responsabilidad ampliada del productor en la gestión de los RAEE?",
    choice1: "Que los productores no tienen responsabilidad en el ciclo de vida de los productos",
    choice2: "Que los productores deben hacerse cargo de la gestión de los residuos generados por sus productos",
    choice3: "Que los productores solo deben preocuparse por la venta de productos",
    choice4: "Que los productores pueden desentenderse de los residuos generados por sus productos",
    answer: 2
},
{
    question: "¿Qué estrategia se menciona para fomentar la economía circular en la gestión de los RAEE? ",
    choice1: "Incrementar la obsolescencia programada",
    choice2: "Reducir la reutilización de materiales",
    choice3: "Promover la reparación y reutilización de productos",
    choice4: "Aumentar la generación de residuos electrónicos",
    answer: 3
},
{
    question: "¿Qué se busca evitar con la implementación de la economía circular en la gestión de los RAEE? ",
    choice1: "La generación de residuos",
    choice2: "La reutilización de materiales",
    choice3: "La durabilidad de los productos",
    choice4: "El uso eficiente de recursos naturales",
    answer: 1
},
{
    question: "¿Qué concepto se refiere al proceso de desmontaje y recuperación de materiales de un producto al final de su vida útil? ",
    choice1: "Reciclaje",
    choice2: "Reutilización",
    choice3: "Reparación",
    choice4: "Refabricación",
    answer: 1
},
{
    question: "¿Qué se busca alargar en el ciclo de vida de los productos según la economía circular?",
    choice1: "La fase de producción",
    choice2: "La fase de uso",
    choice3: "La fase reciclaje",
    choice4: "La fase de obsolescencia",
    answer: 2
},
{
    question: "¿Qué implica la economía circular en la gestión de los RAEE? ",
    choice1: "Fomentar la producción masiva de productos desechables",
    choice2: "Promover la obsolescencia programada de productos",
    choice3: "Buscar la reutilización y reciclaje de materiales",
    choice4: "Incrementar la generación de residuos electrónicos",
    answer: 3
},
{
    question: "¿Qué se busca minimizar en la gestión de los RAEE según la economía circular? ",
    choice1: "La reutilización de materiales",
    choice2: "La generación de residuos",
    choice3: "La durabilidad de los productos",
    choice4: "El uso eficiente de recursos naturales",
    answer: 2
},
{
    question: "¿Qué implica la responsabilidad ampliada del productor en la gestión de los RAEE?",
    choice1: "Que los productores no tienen responsabilidad en el ciclo de vida de los productos",
    choice2: "Que los productores deben hacerse cargo de la gestión de los residuos generados por sus productos",
    choice3: "Que los productores solo deben preocuparse por la venta de productos",
    choice4: "Que los productores pueden desentenderse de los residuos generados por sus productos",
    answer: 2
},
{
    question: "¿Qué estrategia sirve para fomentar la economía circular en la gestión de los RAEE?",
    choice1: "Incrementar la obsolescencia programada",
    choice2: "Reducir la reutilización de materiales",
    choice3: "Promover la reparación y reutilización de productos",
    choice4: "Aumentar la generación de residuos electrónicos",
    answer: 3
},
{
    question: "¿Qué se busca evitar con la implementación de la economía circular en la gestión de los RAEE?",
    choice1: "La generación de residuos",
    choice2: "La reutilización de materiales",
    choice3: "La durabilidad de los productos",
    choice4: "El uso eficiente de recursos naturales",
    answer: 1
}
];

const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 35;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
};

getNewQuestion = () => {

        if(availableQuestions.length == 0 || questionCounter >= MAX_QUESTIONS) { 
            localStorage.setItem('mostRecentScore', score);
            return window.location.assign("../html/end.html");
        }
    questionCounter++;
    progressText.innerText = `${questionCounter}/ ${MAX_QUESTIONS}`;

    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`;

    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach( choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });

    availableQuestions.splice(questionIndex, 1);
    acceptingAnswers = true;
};

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"];

        const classToApply = selectedAnswer == currentQuestion.answer ? 'correct' :  'incorrect';
        
        if(classToApply == 'correct') {
            incrementScore(CORRECT_BONUS);
            correctAudio.play();
        }
        if (classToApply == 'incorrect') {
            incorrectAudio.play();
        }
        
        selectedChoice.parentElement.classList.add(classToApply);
        

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();


        }, 1000);
    });
});

incrementScore = num => {
    score +=num;
    scoreText.innerText = score;
}

startGame();


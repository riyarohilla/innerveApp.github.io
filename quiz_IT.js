// select all elements
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const qImg = document.getElementById("qImg");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");

// create our questions
let questions = [
    {
        question : "Separate Read/Write heads are required in which of these memory access schemes.?",
       // imgSrc : "img/html.png",
        choiceA : "Random Access",
        choiceB : "Sequential Access",
        choiceC : "Direct Access",
		choiceD : " None of these",
        correct : "D"
    },{
        question : "The ALU of a computer response to the commands coming from?",
        //imgSrc : "img/css.png",
        choiceA : "Primary memory",
        choiceB : "Control memory",
        choiceC : "External memory",
		choiceD : "Cache memory",
        correct : "B"
    },{
        question : "What allows you to print on both sides of the printers?",
        //imgSrc : "img/js.png",
        choiceA : "Fuser",
        choiceB : "Duplexer",
        choiceC : "Toner",
		choiceD : "Paper swapping unit",
        correct : "B"
    },{
        question : "A register organized to allow to move left or right operations is called a ….?",
        //imgSrc : "img/js.png",
        choiceA : "Counter",
        choiceB : "Loader",
        choiceC : "Adder",
		choiceD : "Shift register",
        correct : "D"
    },{
        question : "Before a disk drive can access any sector record, a computer program has to provide the record’s disk address what information does this address specify?",
        //imgSrc : "img/js.png",
        choiceA : "Track number",
        choiceB : "Sector number",
        choiceC : "Surface number",
		choiceD : "All of the above",
        correct : "D"
    },{
        question : "Laser Jet Printer speeds are measured in pages per minute(PPM), what do we use to measure dot-matrix printers?",
        //imgSrc : "img/js.png",
        choiceA : "Lines per inch",
        choiceB : "Lines per sheet",
        choiceC : "Characters per inch",
		choiceD : "Characters per second",
        correct : "D"
    },{
        question : ") Which of the following have the fastest access time?",
        //imgSrc : "img/js.png",
        choiceA : "Semiconductor Memories",
        choiceB : "Magnetic Disks",
        choiceC : "Magnetic Taps",
		choiceD : "Compact Disks",
        correct : "A"
    },{
        question : "Which printer is very commonly used for desk to publishing?",
        //imgSrc : "img/js.png",
        choiceA : "Laser Printer",
        choiceB : "Ink jet printer",
        choiceC : "Daisy wheel printer",
		choiceD : "Dot matrix printer",
        correct : "A"
    },{
        question : "What is a common language that computers use to talk with one another on a network?",
        //imgSrc : "img/js.png",
        choiceA : "Client",
        choiceB : "Adapter",
        choiceC : "Protocol",
		choiceD : "Operating Systems",
        correct : "C"
    },{
        question : "A hard disk is divided into tracks, which are further subdivided into …",
        //imgSrc : "img/js.png",
        choiceA : "Clusters",
        choiceB : "Sectors",
        choiceC : "Vectors",
		choiceD : "Heads",
        correct : "B"
    }
	,{
        question : "The bar-code which is used on all types of items, is ready by a scanning device directly into the computer. What is the name of this scanning?",
        //imgSrc : "img/js.png",
        choiceA : "Laser scanner",
        choiceB : "Wand",
        choiceC : "OCR",
		choiceD : "MICRO",
        correct : "A"
    }
	,{
        question : "Which of the following are characteristics of peer to peer networking?",
        //imgSrc : "img/js.png",
        choiceA : "Limited number of computers involved",
        choiceB : "Computer acting as both a client and a server",
        choiceC : "Centralized security and admin",
		choiceD : "Both A and B",
        correct : "D"
    }
	,{
        question : "Which of the following devices send and receive information from other devices?",
        //imgSrc : "img/js.png",
        choiceA : "Parallel port",
        choiceB : "Serial port",
        choiceC : "Video port",
		choiceD : "Both A and B",
        correct : "D"
    }
	,{
        question : "What is the name of the reading device which makes use of photo sensors and laser technologies to interpret printed types of even handwritten data directly from the source document?",
        //imgSrc : "img/js.png",
        choiceA : "MICR",
        choiceB : "OCR",
        choiceC : "MARK SENSING",
		choiceD : "ATM",
        correct : "B"
    }
	,{
        question : "Modem use ………. transmission.",
        //imgSrc : "img/js.png",
        choiceA : "synchronous",
        choiceB : "asynchronous",
        choiceC : "timed interval",
		choiceD : "PPP",
        correct : "A"
    }
	,{
        question : "Which of the following is a type of preventive maintenance used on a hard drive?",
        //imgSrc : "img/js.png",
        choiceA : "Disk diagnostics	",
        choiceB : "Head alignment diagnostics",
        choiceC : "Initializing",
		choiceD : "Un-initializing",
        correct : "A"
    }
	,{
        question : "The storage location in the internal storage of a CPU are called …	",
        //imgSrc : "img/js.png",
        choiceA : "Contents",
        choiceB : "Address	",
        choiceC : "Locations",
		choiceD : "Mask",
        correct : "B"
    }
	,{
        question : "What are alternative names for the internal storage of a computer?",
        //imgSrc : "img/js.png",
        choiceA : "real storage",
        choiceB : "primary memory",
        choiceC : "main memory",
		choiceD : "Both A and B",
        correct : "D"
    }
	,{
        question : "During the normal PC boot process, which of the following is active first?	",
        //imgSrc : "img/js.png",
        choiceA : "RAM BIOS",
        choiceB : "ROM BIOS",
        choiceC : "CMOS",
		choiceD : "Hard disk information",
        correct : "B"
    }
	,{
        question : "Which of the following chips can be reprogrammed with special electric pulses?",
        //imgSrc : "img/js.png",
        choiceA : "EPROM",
        choiceB : "PROM",
        choiceC : "ROM",
		choiceD : "EEPROM",
        correct : "D"
    },{
        question : "The ALU and control unit of most of the microcomputer and combined and manufactured on a single silicon chip what it is called …",
        //imgSrc : "img/js.png",
        choiceA : "Mono chip",
        choiceB : "Micro Processor",
        choiceC : "ALU",
		choiceD : "Control Unit",
        correct : "B"
    },{
        question : "Mini computers are ….",
        //imgSrc : "img/js.png",
        choiceA : "larger than micro computer",
        choiceB : "larger than micro but smaller than mainframe",
        choiceC : "smaller than mainframe	",
		choiceD : "all of the above",
        correct : "B"
    },{
        question : "The decreased cost and increased performance of computer hardware were the distinguishing features of which generation of computer?",
        //imgSrc : "img/js.png",
        choiceA : "first and second",
        choiceB : "second and third	",
        choiceC : "third and fourth",
		choiceD : ". all generations",
        correct : "D"
    },{
        question : "The CPU chip used in a computer practically made out of …",
        //imgSrc : "img/js.png",
        choiceA : "silica",
        choiceB : "carbon",
        choiceC : "copper",
		choiceD : "gold",
        correct : "A"
    },{
        question : "The word ‘computer’ usually refers to the central processing unit plus",
        //imgSrc : "img/js.png",
        choiceA : "External memory",
        choiceB : "Internal memory",
        choiceC : "Input device",
		choiceD : "Output device",
        correct : "B"
    },{
        question : "Super computers are ….",
        //imgSrc : "img/js.png",
        choiceA : "used to process complex scientific jobs",
        choiceB : "used in star wars and space research",
        choiceC : "the largest and fastest systems",
		choiceD : "all of the above",
        correct : "D"
    },{
        question : "A computer will function in its memory ..",
        //imgSrc : "img/js.png",
        choiceA : "has control unit",
        choiceB : "is given input data",
        choiceC : "has a program in its memory",
		choiceD : "has software package",
        correct : "C"
    },{
        question : "Which statement is valid for the digital computer?",
        //imgSrc : "img/js.png",
        choiceA : "its less accurate than the analog computer",
        choiceB : "it represents the decimal numbers through a string of binary digits",
        choiceC : "it is used primarily in scientific application",
		choiceD : "both A and C",
        correct : "B"
    },{
        question : "A hybrid computer in an aeroplane can also measure …",
        //imgSrc : "img/js.png",
        choiceA : "altitude of the plane",
        choiceB : "speed of the plane",
        choiceC : "convert the analog data into digital data",
		choiceD : "All of the above",
        correct : "D"
    },{
        question : "The central computer in a distributed processing system is called the",
        //imgSrc : "img/js.png",
        choiceA : "Mainframe",
        choiceB : "CPO",
        choiceC : "Multiplexer",
		choiceD : "Host",
        correct : "D"
    },{
        question : "ROM is a non-volatile memory because …",
        //imgSrc : "img/js.png",
        choiceA : "it can be programmed when required",
        choiceB : "the programs are permanently stored",
        choiceC : "the programs are erased as the power is switched off",
		choiceD : "the programs are changeable as required",
        correct : "B"
    },{
        question : "Memories in which any location can be reached in a fixed land short amount of the time after specifying its address is called …",
        //imgSrc : "img/js.png",
        choiceA : "Sequential-access",
        choiceB : "Random access memory",
        choiceC : "Secondary memory",
		choiceD : "Mass storage",
        correct : "B"
    },{
        question : "Which of the following is not a part of the CPU?",
        //imgSrc : "img/js.png",
        choiceA : "Storage unit",
        choiceB : "Arithmetic an logic unit",
        choiceC : "Program",
		choiceD : "Control unit",
        correct : "C"
    },{
        question : "The register which contains the data to be return into or read out of the addressed location is known as …",
        //imgSrc : "img/js.png",
        choiceA : "Index register",
        choiceB : "Instruction register",
        choiceC : "Memory register",
		choiceD : "Memory data register",
        correct : "C"
    },{
        question : "An UPS is attached to the computer so that ….",
        //imgSrc : "img/js.png",
        choiceA : "it prevents from loss of data",
        choiceB : "it supplies electricity all the time",
        choiceC : "all of the above",
		choiceD : "none of the above",
        correct : "D"
    },{
        question : "The Qwerty keyboard ..",
        //imgSrc : "img/js.png",
        choiceA : "is the most popular keyboard",
        choiceB : "is the fastest keyboard",
        choiceC : "is a keyboard that is really used",
		choiceD : "all of the above",
        correct : "A"
    },{
        question : "Microcomputers are …",
        //imgSrc : "img/js.png",
        choiceA : "Highly efficient in data processing",
        choiceB : "Very much reliable",
        choiceC : "Small and elegant",
		choiceD : "Super computers",
        correct : "D"
    },{
        question : "Which of the computer memory is essentially empty?",
        //imgSrc : "img/js.png",
        choiceA : "RAM",
        choiceB : "ROM",
        choiceC : "EPROM",
		choiceD : "FROM",
        correct : "D"
    },{
        question : "Which is the most powerful type of computer?",
        //imgSrc : "img/js.png",
        choiceA : "micro computer",
        choiceB : "mini computer",
        choiceC : "mainframe computer",
		choiceD : "super computer",
        correct : "D"
    },{
        question : "Which of the following is not a sequence storage device?",
        //imgSrc : "img/js.png",
        choiceA : "Magnetic disk",
        choiceB : "Magnetic tape",
        choiceC : "Paper tape",
		choiceD : "All of the above",
        correct : "A"
    },{
        question : "Different components on the motherboard of a PC unit are linked together by sets of parallel electrical conducting lines. What are these lines called?",
        //imgSrc : "img/js.png",
        choiceA : "Conductor’s",
        choiceB : "Buses",
        choiceC : "Connectors",
		choiceD : "Consecutively",
        correct : "B"
    },{
        question : "The ARPANET helped to develop protocol called …..",
        //imgSrc : "img/js.png",
        choiceA : "TCP/IP",
        choiceB : "POPA",
        choiceC : "ARP",
		choiceD : "None",
        correct : "C"
    },{
        question : "The ALU of central processing unit does the essential math work for the computer. What does the control unit do …..",
        //imgSrc : "img/js.png",
        choiceA : "Communicate its results",
        choiceB : "Activates the output device",
        choiceC : "Monitors the flow of information",
		choiceD : "Control the printer",
        correct : "C"
    },{
        question : "The language that the computer can understand and execute is called ….",
        //imgSrc : "img/js.png",
        choiceA : "Machine language",
        choiceB : "Application software",
        choiceC : "System program",
		choiceD : "All of the above",
        correct : "A"
    },{
        question : "Boot virus affects the ……… of the program of a system.",
        //imgSrc : "img/js.png",
        choiceA : "Boot recorded program",
        choiceB : "Booting computer",
        choiceC : "Boot halted",
		choiceD : "None",
        correct : "A"
    },{
        question : "Which of the following is not characteristic of a relational database model?",
        //imgSrc : "img/js.png",
        choiceA : "Tables",
        choiceB : "Treelike Structure",
        choiceC : "Complex logical relationships",
		choiceD : "Records",
        correct : "B"
    },{
        question : "Who designed the first electronics computer ENIAC?",
        //imgSrc : "img/js.png",
        choiceA : "Van neumann",
        choiceB : "Joseph M jackquard",
        choiceC : "J. PresperEckers and John W Mouchley",
		choiceD : "All of the above",
        correct : "C"
    },{
        question : "The process of rewriting parts of a file to continuous sectors on a hard disk to increase the speed of access and retrieval.",
        //imgSrc : "img/js.png",
        choiceA : "Fragmentation",
        choiceB : "Defragmentation",
        choiceC : "Both",
		choiceD : "None",
        correct : "A"
    },{
        question : "A language used to express algorithms in computer understandable form is ….",
        //imgSrc : "img/js.png",
        choiceA : "Assembly language",
        choiceB : "Low level language",
        choiceC : "Algorithmic language",
		choiceD : "Programming language",
        correct : "A"
    },{
        question : "Instructions and memory addresses are represented by ..",
        //imgSrc : "img/js.png",
        choiceA : "Character codes",
        choiceB : "Binary codes",
        choiceC : "Binary words",
		choiceD : "Parity bit",
        correct : "B"
    }
	
];

// create some variables

//const lastQuestion = questions.length - 1;
const lastQuestion = 10;
let runningQuestion =0;
let count = 0;
let w=0;
const questionTime = 25; // 25s
const gaugeWidth = 150; // 150px
const gaugeUnit = gaugeWidth / questionTime;
let TIMER;
let score = 0;

// render a question
function renderQuestion(){
   
    let q = questions[runningQuestion];
    
    question.innerHTML = "<p>"+ q.question +"</p>";
   
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
	choiceD.innerHTML = q.choiceD;
}

start.addEventListener("click",startQuiz);

// start quiz
function startQuiz(){
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
    renderCounter();
    TIMER = setInterval(renderCounter,1000); // 1000ms = 1s
}

// render progress
function renderProgress(){
    for(let qIndex = 0; qIndex <= 9; qIndex++){
        progress.innerHTML += "<div class='prog' id="+ qIndex+"></div>";
    }
}

// counter render

function renderCounter(){
    if(count <= questionTime){
        counter.innerHTML = count;
        timeGauge.style.width = count * gaugeUnit + "px";
        count++
    }else{
        count = 0;
        // change progress color to red
        answerIsWrong();
        if(w !=9){
           //runningQuestion++;
		
		   runningQuestion = Math.floor(Math.random() * questions.length);
		   //document.write(runningQuestion);
            renderQuestion();
			w++;
        }else{
            // end the quiz and show the score
            clearInterval(TIMER);
            scoreRender();
        }
    }
}

// checkAnwer

function checkAnswer(answer){
    if( answer == questions[runningQuestion].correct){
        // answer is correct
        score++;
        // change progress color to green
        answerIsCorrect();
    }else{
        // answer is wrong
        // change progress color to red
        answerIsWrong();
    }
    count = 0;
    if(w !=9){
        //runningQuestion++;
        	 
	 runningQuestion = Math.floor(Math.random() * questions.length);
	 //document.write(runningQuestion);
	     w++;	
        renderQuestion();
    }else{
        // end the quiz and show the score
        clearInterval(TIMER);
        scoreRender();
    }
}

// answer is correct
function answerIsCorrect(){
    document.getElementById(w).style.backgroundColor = "#0f0";
}

// answer is Wrong
function answerIsWrong(){
    document.getElementById(w).style.backgroundColor = "#f00";
}

// score render
function scoreRender(){
    scoreDiv.style.display = "block";
    
    // calculate the amount of question percent answered by the user
    const scorePerCent = Math.round(100 * score/10);
    
    // choose the image based on the scorePerCent
    let img = (scorePerCent >= 80) ? "img/5.png" :
              (scorePerCent >= 60) ? "img/4.png" :
              (scorePerCent >= 40) ? "img/3.png" :
              (scorePerCent >= 20) ? "img/2.png" :
              "img/1.png";
    
  scoreDiv.innerHTML = "<img src="+ img +">";
  scoreDiv.innerHTML += "<p>"+ scorePerCent +"%</p>";
	
}






















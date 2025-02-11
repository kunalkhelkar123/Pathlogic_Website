// technologies.js
const technologies = [
    {
        id: 1,
        icon: "Cpu",
        title: "IOT and Beyond",
        description: "IOT and beyond focuses on this digital revolution that engaging in digital technology and investment.",
        largeDescription: "\"IOT and Beyond\" takes you on an exciting journey through the rapidly evolving world of the Internet of Things (IoT), showcasing its transformative potential across various sectors. From smart homes and healthcare to industrial applications and transportation, this topic covers how interconnected devices are revolutionizing the way we live, work, and interact with technology.\n" +
            "\n\n" +
            "In exploring IoT’s impact, the focus shifts beyond just connectivity to include the power of data, real-time monitoring, and automation. With an ever-growing number of devices and systems communicating seamlessly, IoT is enabling smarter cities, enhanced productivity, and more efficient resource management, all while pushing the boundaries of innovation.\n" +
            "\n\n" +
            "But the story doesn’t stop there—\"IOT and Beyond\" also delves into what comes next. From edge computing and AI integration to advancements in security and network architecture, the future of IoT looks even more promising. As new technologies emerge, we move closer to creating a fully connected world where devices not only talk to each other but also think and make decisions autonomously.\n" +
            "\n\n" +
            "Whether you're an enthusiast, a developer, or an industry professional, \"IOT and Beyond\" provides insights into the present and future of IoT, offering a glimpse into the ever-expanding possibilities of a connected world.",
        duration: "4-5 Hours",
        mode: "Online / Offline",
        techUri: 'iot-and-beyond',
        backgroundImage: "/src/assets/bg-iot.jpg",
        flowChartImage: "/src/assets/iot-flow.png",
        details: {
            preRequisites: [],
            courseContent: [
                "Introduction to the Internet of Things",
                "History",
                "Definitions",
                "Application Areas",
                "Pitfalls",
                "Introduction to Raspberry Pi",
                "What is Raspberry Pi?",
                "Tools : Win32ImageWrite & SDFormatter",
                "Loading RaspbianOS image on SD CARD",
                "Connecting Powering up & configuring Raspberry Pi",
                "Installation, Powering up & configuring Raspberry Pi, updates and upgrade as per requirement",
                "Hello World - program demo using C",
                "LED blinking ---- GPIO output test",
                "Switch - LED test ---- GPIO input & output test",
                "IR-TxRx Sensor test ---- GPIO input test",
                "Soil Moisture Sensor test ---- GPIO input test",
                "Rain Sensor test ---- GPIO input test",
                "ADC MCP3204 test ---- SPI with GPIO bit-banging method",
                "ADC MCP3204 test ---- Using On-Chip SPI Peripheral through wiring Pi",
                "RTC DS1307 test ---- Using On-Chip I2C Peripheral through wiring Pi",
                "Networking with Pi",
                "Client - Server programming for Automating Device / sniffing Device State",
                "IoT",
                "Installing PubNub SDK for C language",
                "Creating Account with PubNub Cloud Server",
                "Using keys for publishing & subscribing through PubNub Cloud",
                "Hello World - program demo using PubNub Cloud",
                "Automating Devices using DTEs (PC/LAPTOP/MOBILE) VIA PUBNUB CLOUD",
                "Sniffing information using DTEs (PC/LAPTOP/MOBILE) VIA PUBNUB"
            ],
            hardwareRequirements: [],
            softwareRequirements: []
        },
        faq: [
            {
                question: "What is the focus of the 'IOT and Beyond' workshop?",
                answer: "This workshop focuses on introducing you to the Internet of Things (IoT) using practical hands-on experience with Raspberry Pi. You'll learn how to set up and configure Raspberry Pi, connect sensors, and interact with the IoT cloud using PubNub."
            },
            {
                question: "Do I need prior experience with Raspberry Pi or IoT?",
                answer: "No, this workshop is designed for beginners. While prior experience is helpful, the workshop covers everything from the basics of Raspberry Pi setup to the more advanced aspects of IoT networking and cloud integration."
            },
            {
                question: "What will I learn in this workshop?",
                answer: "In this workshop, you'll cover topics such as Raspberry Pi setup, GPIO programming, working with sensors (like soil moisture, rain, and IR sensors), and connecting your projects to the IoT cloud using PubNub. You'll also learn how to automate devices and perform device state sniffing."
            },
            {
                question: "What hardware do I need for this workshop?",
                answer: "You will need a Raspberry Pi, SD card with Raspbian OS, a power supply for the Raspberry Pi, and various sensors like LED, soil moisture sensor, rain sensor, and an ADC MCP3204 for sensor interfacing. We will provide the necessary tools and resources during the workshop."
            },
            {
                question: "What software will I be using in this workshop?",
                answer: "The workshop will involve using tools like Win32DiskImager and SDFormatter to load Raspbian OS onto your Raspberry Pi's SD card. Additionally, you will work with C programming and the PubNub SDK to interact with the IoT cloud."
            },
            {
                question: "What is PubNub, and why is it important for this workshop?",
                answer: "PubNub is a real-time cloud service that allows for device-to-device communication over the internet. In this workshop, you will use PubNub to send and receive data between devices, automate actions, and interact with IoT systems in real time."
            },
            {
                question: "How do I set up and configure my Raspberry Pi?",
                answer: "You’ll learn how to load RaspbianOS onto your Raspberry Pi using the Win32DiskImager tool, then power it up and configure the device. We’ll also walk through the process of ensuring that updates and upgrades are applied as needed."
            },
            {
                question: "What types of sensors will I work with?",
                answer: "You’ll work with various sensors such as IR sensors, soil moisture sensors, rain sensors, and the ADC MCP3204 for analog-to-digital conversion. These sensors are interfaced with the Raspberry Pi through GPIO pins and are used to gather data in real-time."
            },
            {
                question: "Will I learn how to program with C in this workshop?",
                answer: "Yes, we will cover basic C programming concepts for IoT applications. You'll start with a 'Hello World' program and move on to more advanced topics like controlling LEDs and reading sensor data via GPIO pins."
            },
            {
                question: "What is the significance of IoT in this workshop?",
                answer: "The workshop covers the core concepts of IoT, allowing you to connect sensors and devices to the internet. You will use PubNub to send and receive real-time data, enabling automation and remote control of devices."
            },
            {
                question: "Will I get a certificate after completing the workshop?",
                answer: "Yes, upon successful completion of the workshop, you will receive a certificate recognizing your participation and skills gained in IoT, Raspberry Pi, and real-time cloud-based automation."
            },
            {
                question: "How will the IoT client-server communication work in this workshop?",
                answer: "You’ll learn how to set up client-server communication using your Raspberry Pi. The client will send and receive data, while the server (running on a cloud platform like PubNub) handles device state automation and information sniffing."
            },
            {
                question: "How can I apply for the workshop?",
                answer: "To apply for the workshop, simply click on the 'Apply Now' link and fill out the necessary information. Once your application is processed, you'll receive all the details you need to get started."
            }
        ]
    },
    {
        id: 2,
        icon: "Brain",
        title: "AI/ML on Embedded Systems",
        description: "With embedded AI /ML devices have the ability to run AI/ML data at the device level and then directly use the results to perform an appropriate task or action.",
        largeDescription: "\"AI/ML on Embedded Systems\" explores the integration of artificial intelligence (AI) and machine learning (ML) technologies within embedded systems, enabling more intelligent, autonomous devices. Embedded systems are typically constrained in terms of processing power, memory, and energy, yet AI and ML offer the potential to enhance their capabilities, making them smarter and more efficient in real-time decision-making.\n" +
            "\n\n" +
            "The focus of this field is on optimizing machine learning algorithms for resource-constrained environments. By leveraging techniques like edge computing, AI/ML algorithms are processed directly on embedded devices, eliminating the need for constant cloud connectivity and improving response times. This is particularly valuable in applications like smart sensors, robotics, industrial automation, and IoT devices.\n" +
            "\n\n" +
            "As AI and ML continue to evolve, they open up new opportunities for embedded systems in fields such as healthcare, automotive, and consumer electronics. Devices can now learn from data patterns and adapt over time, making them more capable and responsive to changing environments. This fusion of AI/ML and embedded systems is poised to drive the next wave of innovation in smart, connected technologies.\n" +
            "\n\n" +
            "With the rapid growth of machine learning tools and frameworks optimized for embedded hardware, the possibilities are vast. \"AI/ML on Embedded Systems\" offers a deep dive into how these advanced technologies are transforming industries, providing a foundation for developers and engineers to build cutting-edge, intelligent systems for the future.",
        duration: "4-5 Hours",
        mode: "Online / Offline",
        techUri: 'ai-ml-on-embedded-systems',
        backgroundImage: "/src/assets/bg-embedded-systems.png",
        flowChartImage: "/src/assets/embedded-flow.png",
        details: {
            preRequisites: [
                "Hands on experience on C",
                "Basic Knowledge on Python",
                "Experience on Cortex M4 platform",
                "IMU sensor Interfacing"
            ],
            courseContent: [
                "Introduction to Machine Learning",
                "Machine Learning on Embedded Devices – Edge computing",
                "Machine Learning Software Framework",
                "Introduction to TensorFlow Lite",
                "Data collection from IMU sensor data",
                "Feature Extraction from Motion data",
                "Annotating Data",
                "Signal Processing Mechanism",
                "Classification Algorithm to Train the model",
                "Creating Optimized firmware for Edge Computing",
                "Porting on Arduino Nano 33 BLE board",
                "Application Development – Gesture recognition using TensorFlow Lite Model on Edge Computing"
            ],
            hardwareRequirements: [
                // "Arduino nano 33 BLE board",
                // "ICM 20948 9 axis sensor",
                // "Lithium-Ion Polymer Battery (3.7v 100mAh)"
            ],
            softwareRequirements: []
        },
        faq: [
            {
                question: "What is the focus of the 'AI/ML on Embedded Systems' workshop?",
                answer: "This workshop focuses on integrating AI and ML with embedded systems, particularly using techniques like edge computing. You'll work with TensorFlow Lite to optimize models and port them to devices like Arduino Nano, enabling real-time applications like gesture recognition."
            },
            {
                question: "Do I need prior experience with AI/ML?",
                answer: "While prior experience with AI/ML can be helpful, it is not required. The workshop will guide you through the necessary machine learning concepts and the TensorFlow Lite framework to apply machine learning on embedded devices."
            },
            {
                question: "What hardware will I need for this workshop?",
                answer: "You will need an Arduino Nano 33 BLE board, an ICM 20948 9-axis sensor, and a 3.7V 100mAh lithium-ion polymer battery to work with the embedded devices and sensors in this workshop."
            },
            {
                question: "What software tools will I use in this workshop?",
                answer: "You'll be using TensorFlow Lite for creating and optimizing machine learning models for embedded systems, along with tools for working with Arduino Nano and sensors like IMU for data collection and feature extraction."
            },
            {
                question: "Will I get a certificate after completing the workshop?",
                answer: "Yes, you will receive a certificate after successfully completing the workshop, which will highlight your skills in AI/ML for embedded systems and edge computing."
            },
            {
                question: "Do I need prior knowledge of embedded systems?",
                answer: "Basic experience with embedded systems, particularly with platforms like the Cortex M4, will be beneficial. However, the workshop will cover all necessary concepts to get you up to speed with the required skills."
            },
            {
                question: "What is TensorFlow Lite, and how is it used in this workshop?",
                answer: "TensorFlow Lite is a lightweight version of TensorFlow designed for mobile and embedded devices. In this workshop, you'll use TensorFlow Lite to optimize machine learning models, enabling real-time inference on edge devices like the Arduino Nano."
            },
            {
                question: "What will I learn about gesture recognition in this workshop?",
                answer: "You'll learn how to create a machine learning model for gesture recognition using IMU sensor data, process that data, and then deploy the model to an embedded system for real-time gesture recognition."
            },
            {
                question: "How does edge computing play a role in this workshop?",
                answer: "Edge computing allows data to be processed locally on the embedded device, reducing the need for constant cloud connectivity. In this workshop, you'll learn how to deploy machine learning models on embedded devices for real-time decision-making."
            },
            {
                question: "Can I apply machine learning to other embedded platforms after this workshop?",
                answer: "Yes! The principles learned in this workshop can be applied to other embedded platforms, allowing you to create intelligent, real-time systems across a variety of use cases."
            }
        ]
    },
    {
        id: 3,
        icon: "BotMessageSquare",
        title: "Make your own Alexa",
        description: "Not everyone can afford that amount of money just for a speaker. There is one thing you can do; You can build your own Alexa for free",
        largeDescription: "\"Make Your Own Alexa\" is a hands-on guide to building a custom voice assistant similar to Amazon's Alexa using open-source tools and technologies. This project helps you understand the core components behind voice recognition, natural language processing (NLP), and smart device control. Whether you're a beginner or an enthusiast, it provides the knowledge to create a personalized voice assistant tailored to your specific needs.\n" +
            "\n\n" +
            "In this journey, you'll learn how to set up and integrate essential frameworks like speech-to-text, text-to-speech, and machine learning libraries to process and understand commands. You'll also explore how to connect your assistant to IoT devices, enabling voice-activated control of lights, appliances, and other smart gadgets around your home.\n" +
            "\n\n" +
            "By creating your own Alexa, you’ll gain a deeper understanding of how voice assistants work under the hood, and you’ll be empowered to customize features, enhance functionality, and add unique capabilities that align with your goals. It’s a great project for anyone interested in voice technology and automation.\n" +
            "\n\n" +
            "\"Make Your Own Alexa\" is an ideal introduction to building AI-powered applications while exploring the potential of voice interfaces. Whether you're interested in smart home automation or just want to explore the world of voice assistants, this project gives you the foundation to create your own personalized, voice-activated system.",
        duration: "4-5 Hours",
        mode: "Online / Offline",
        techUri: 'make-your-own-alexa',
        backgroundImage: "/src/assets/bg-alexa.jpg",
        // backgroundImage: "https://assets.aboutamazon.com/dims4/default/201115a/2147483647/strip/true/crop/1600x900+0+0/resize/767x431!/quality/90/?url=https%3A%2F%2Famazon-blogs-brightspot.s3.amazonaws.com%2F17%2F7e%2F9fba54044853a29dcc3227ed09da%2Falexa-blog2-inline-1-1600x9001.jpg",
        flowChartImage: "/src/assets/alexa-flow.png",
        details: {
            preRequisites: [
                "Knowledge on Linux build system",
                "Working knowledge on Raspberry Pi is added advantage",
                "Working knowledge on ESP32 is added advantage",
                "Hands on experience on C"
            ],
            courseContent: [
                "Understanding Speech recognition mechanisms",
                "Basics of Alexa",
                "Internals of Alexa ecosystem",
                    // "\n\tAVS",
                    // "\n\tAWS registration for Alexa",
                "Alexa Skill creation",
                "Setup Raspberry Pi",
                "Installing Alexa on Raspberry Pi",
                    // "\n\tConfigure and launch AVS on Raspberry Pi",
                "Alexa applications",
                    // "\n\tMusic Control",
                    // "\n\tWeather",
                "Home automation control using Alexa with ESP32 IoT module"
            ],
            hardwareRequirements: [
                // "Raspberry Pi 4",
                // "ESP32",
                // "Mic and speaker"
            ],
            softwareRequirements: []
        },
        faq: [
            {
                question: "What will I learn in this workshop?",
                answer: "You will learn how to set up and configure Alexa on a Raspberry Pi, create Alexa skills, and integrate voice commands with IoT devices like lights and appliances using ESP32."
            },
            {
                question: "Do I need prior experience with Alexa or Raspberry Pi?",
                answer: "Basic knowledge of Linux systems and some familiarity with Raspberry Pi will be helpful, but no prior experience with Alexa is necessary. The workshop will guide you through the setup and configuration process."
            },
            {
                question: "What is AVS, and why is it important for this workshop?",
                answer: "AVS (Alexa Voice Service) is a cloud-based service provided by Amazon that enables voice interaction with Alexa. In this workshop, you'll set up and configure AVS on a Raspberry Pi to make it function like an Alexa device."
            },
            {
                question: "Will I need an Amazon account?",
                answer: "Yes, you'll need an Amazon account to register for AVS and create Alexa Skills during the workshop."
            },
            {
                question: "What hardware do I need for this workshop?",
                answer: "You will need a Raspberry Pi 4, an ESP32 for IoT integration, and a microphone and speaker for voice input and output."
            },
            {
                question: "Can I control my smart home with this project?",
                answer: "Yes, the workshop includes integrating Alexa with IoT devices, so you'll be able to control things like lights, appliances, and other connected devices using voice commands."
            },
            {
                question: "Do I need to have prior programming experience?",
                answer: "Basic knowledge of programming, especially in C, will be helpful but not required. The workshop will guide you through the necessary steps."
            },
            {
                question: "How does the Alexa skill creation work?",
                answer: "You will create custom skills for Alexa, which are essentially voice commands that trigger specific actions, such as controlling smart devices or retrieving information like weather updates."
            },
            {
                question: "What will I achieve by the end of the workshop?",
                answer: "By the end of the workshop, you will have a working voice assistant built on a Raspberry Pi, capable of performing tasks like music control, weather updates, and home automation through voice commands."
            },
            {
                question: "Will I get a certificate after completing the workshop?",
                answer: "Yes, upon successful completion of the workshop, you will receive a certificate that acknowledges your work in creating a voice-activated Alexa system."
            }
        ]
    },
    {
        id: 4,
        icon: "Code",
        title: "Python Programming",
        description: "It is an easy way to learn Python that you can do it in 2 days. Cut through the noise and get real results with a step-by-step approach to learning Python.",
        largeDescription: "\"Python Programming\" introduces you to one of the most popular and versatile programming languages in the world. Known for its simplicity and readability, Python is an excellent choice for beginners and experienced developers alike. This course covers the fundamentals of Python, from basic syntax and data types to more advanced concepts like functions, loops, and object-oriented programming.\n" +
            "\n\n" +
            "Throughout the journey, you’ll work with Python’s powerful libraries and frameworks, learning how to build practical applications, automate tasks, and process data. Whether you’re interested in web development, data science, machine learning, or automation, Python provides the tools you need to get started in these fields.\n" +
            "\n\n" +
            "Python’s expansive community and rich ecosystem of resources make it easy to find support and expand your knowledge. As you grow your skills, you’ll be able to tackle complex projects, write clean code, and leverage Python’s full potential for creating innovative solutions.\n" +
            "\n\n" +
            "Whether you're looking to start your coding journey or advance your programming skills, \"Python Programming\" equips you with the essential knowledge and hands-on experience to succeed in a variety of technical fields.",
        duration: "4-5 Hours",
        mode: "Online / Offline",
        techUri: 'python-programming',
        backgroundImage: "/src/assets/bg-python.webp",
        flowChartImage: "/src/assets/python-flow.png",
        details: {
            preRequisites: [],
            courseContent: [
                "Introduction to Python",
                "Control Statements",
                "List",
                "Tuple",
                "Dictionary",
                "Set",
                "Strings",
                "Searching and sorting algorithms",
                "Functions",
                "Recursion",
                "Lambda expressions",
                "OOPs concepts",
                "Exception handling"
            ],
            hardwareRequirements: [],
            softwareRequirements: []
        },
        faq: [
            {
                question: "What is Python Programming?",
                answer: "Python is a high-level, interpreted programming language known for its simplicity and readability. It's widely used in various fields, including web development, data science, automation, and machine learning."
            },
            {
                question: "Do I need prior programming experience to take this course?",
                answer: "No, this course is designed for beginners. It starts from the basics and gradually covers more advanced topics, so even if you’re new to programming, you’ll be able to follow along."
            },
            {
                question: "What will I learn in this workshop?",
                answer: "You will learn the fundamental concepts of Python, including syntax, data types, control structures, functions, and object-oriented programming. You will also work with Python’s built-in libraries to create practical applications."
            },
            {
                question: "What topics are covered in this course?",
                answer: "The course covers control statements, data structures (like lists, tuples, and dictionaries), algorithms, functions, recursion, object-oriented programming, and exception handling."
            },
            {
                question: "Do I need any special software to participate in this workshop?",
                answer: "No, Python is free to download and can be installed on most operating systems. You'll also work with an IDE (like PyCharm or VS Code) to write and run Python code."
            },
            {
                question: "Can I use Python for web development?",
                answer: "Yes! Python is a popular language for web development, especially with frameworks like Django and Flask. The workshop focuses on core programming concepts that will be useful for web development and other applications."
            },
            {
                question: "How long will it take to learn Python?",
                answer: "In this workshop, you'll cover the essentials of Python in 14 hours. However, mastery comes with practice, so continue experimenting and building projects after the workshop to deepen your knowledge."
            },
            {
                question: "Will I get a certificate after completing the workshop?",
                answer: "Yes, upon successful completion of the workshop, you will receive a certificate acknowledging your skills in Python programming."
            },
            {
                question: "Is Python difficult to learn?",
                answer: "No, Python is known for its simplicity. The syntax is easy to understand, making it a great language for beginners. The workshop is designed to make the learning process smooth and engaging."
            }
        ]
    }
    // Add more technologies here for your workshops
];

export default technologies;

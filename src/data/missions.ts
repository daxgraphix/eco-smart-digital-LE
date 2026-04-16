import { Mission } from '../types';

export const MISSIONS: Record<string, Mission> = {
  'digital-footprint': {
    id: 'digital-footprint',
    title: 'Mission 1: The Invisible Footprint',
    badgeName: 'Carbon Tracker',
    icon: 'Globe',
    badgeIcon: 'Zap',
    description: 'Uncover the hidden energy cost of the digital world and learn to shrink your carbon footprint.',
    knowledge: {
      title: 'The Energy of Data',
      pages: [
        { text: "Greetings, Recruit! Every time you go online, you use energy. This creates a <strong>Digital Carbon Footprint</strong>." },
        { text: "The internet isn't a magical cloud—it's a massive, physical network of servers and cables." },
        { text: "Data centers consume about 1% of global electricity demand." },
        { text: "Streaming video in SD instead of HD can reduce energy use by up to 80%!" },
        { text: "Sending an email with a large attachment can have a footprint of 50g of CO2." },
        { text: "A simple search query emits about 0.2g of CO2." },
        { text: "The carbon footprint of our gadgets, the internet and the systems supporting them account for about 3.7% of global greenhouse emissions." },
        { text: "This is similar to the amount produced by the airline industry globally." },
        { text: "By 2025, it is estimated that data centers will consume 20% of the world's electricity." },
        { text: "Small changes in your digital habits can lead to significant energy savings over time." }
      ]
    },
    learn: {
      title: 'Footprint Facts',
      cards: [
        { front: 'Digital Carbon Footprint', back: 'The CO2 emissions produced by our digital activities.' },
        { front: 'Data Center', back: 'A physical facility used to house computer systems and associated components.' },
        { front: 'Greenhouse Effect', back: 'The process by which radiation from a planet\'s atmosphere warms the planet\'s surface.' },
        { front: 'SD vs HD', back: 'Standard Definition uses significantly less data and energy than High Definition.' },
        { front: 'Email Impact', back: 'Unnecessary emails and large attachments contribute to server load and energy use.' },
        { front: 'Server', back: 'A powerful computer that stores data and delivers it over the internet.' },
        { front: 'Cloud Computing', back: 'Using remote servers to store and process data instead of local devices.' },
        { front: 'Bandwidth', back: 'The maximum rate of data transfer across a network path.' },
        { front: 'Streaming', back: 'Broadcasting data continuously over the internet in a steady stream.' },
        { front: 'CO2 Equivalent', back: 'A measure that expresses different greenhouse gases in terms of CO2.' },
        { front: 'Energy Efficiency', back: 'Using less energy to achieve the same output or result.' },
        { front: 'Carbon Offset', back: 'Compensating for emissions by funding an equivalent reduction elsewhere.' }
      ]
    },
    challenge: {
      type: 'quiz',
      title: 'Digital Diet',
      intro: 'Your digital actions have real-world energy costs. Let\'s see how well you can spot the energy hogs!',
      questions: [
        {
          text: 'Which activity uses the MOST energy?',
          options: [
            { text: 'Streaming a 4K movie for one hour.', correct: true },
            { text: 'Sending 100 emails.', correct: false },
            { text: 'Listening to a downloaded podcast.', correct: false }
          ],
          feedback: 'High-quality video streaming is extremely data-intensive and energy-heavy.'
        },
        {
          text: 'What percentage of global greenhouse emissions is attributed to the digital sector?',
          options: [
            { text: 'About 1%', correct: false },
            { text: 'About 3.7%', correct: true },
            { text: 'About 10%', correct: false }
          ],
          feedback: 'The digital sector has a footprint comparable to the aviation industry.'
        },
        {
          text: 'Which streaming quality uses the LEAST energy?',
          options: [
            { text: '480p (SD)', correct: true },
            { text: '1080p (Full HD)', correct: false },
            { text: '4K Ultra HD', correct: false }
          ],
          feedback: 'Standard Definition uses up to 80% less energy than HD streaming.'
        },
        {
          text: 'How much CO2 does a single search query emit?',
          options: [
            { text: 'About 0.2g', correct: true },
            { text: 'About 5g', correct: false },
            { text: 'About 50g', correct: false }
          ],
          feedback: 'While it seems small, billions of searches per day add up quickly.'
        },
        {
          text: 'By 2025, data centers will consume what percentage of world electricity?',
          options: [
            { text: 'About 5%', correct: false },
            { text: 'About 20%', correct: true },
            { text: 'About 50%', correct: false }
          ],
          feedback: 'This is a significant increase from the current ~1%.'
        },
        {
          text: 'Which action has the smallest digital carbon footprint?',
          options: [
            { text: 'Sending a text-only email', correct: true },
            { text: 'Sending an email with photo attachment', correct: false },
            { text: 'Streaming a video call', correct: false }
          ],
          feedback: 'Text emails use minimal data compared to attachments or video.'
        },
        {
          text: 'What is the best way to reduce your digital footprint when watching videos?',
          options: [
            { text: 'Download and watch offline', correct: true },
            { text: 'Stream in 4K', correct: false },
            { text: 'Keep videos playing in background', correct: false }
          ],
          feedback: 'Downloading once is more efficient than streaming repeatedly.'
        },
        {
          text: 'Which of these uses the most energy over time?',
          options: [
            { text: 'Leaving devices on standby', correct: true },
            { text: 'Occasional web browsing', correct: false },
            { text: 'Deleting old emails', correct: false }
          ],
          feedback: 'Standby power (vampire power) adds up significantly over months.'
        }
      ]
    }
  },
  'e-waste': {
    id: 'e-waste',
    title: 'Mission 2: The E-Waste Mountain',
    badgeName: 'E-Waste Expert',
    icon: 'Smartphone',
    badgeIcon: 'Recycle',
    description: 'Learn to be a responsible agent when decommissioning your gadgets.',
    knowledge: {
      title: 'Tech Trash Truths',
      pages: [
        { text: "When gadgets break, they become <strong>e-waste</strong>. This is the fastest-growing waste stream globally." },
        { text: "E-waste contains valuable materials like gold, but also toxic ones like lead." },
        { text: "Only about 20% of global e-waste is formally recycled." },
        { text: "A single smartphone contains over 60 different elements." },
        { text: "Mining these elements has a massive environmental and social impact." },
        { text: "Recycling 1 million cell phones can recover 35,000 lbs of copper and 772 lbs of silver." },
        { text: "Toxic substances in e-waste include mercury, cadmium, and brominated flame retardants." },
        { text: "When e-waste is buried in landfills, these toxins can leak into the soil and groundwater." },
        { text: "The 'Right to Repair' movement aims to make it easier for consumers to fix their own devices." },
        { text: "Extending the life of your device by just one year significantly reduces its environmental impact." }
      ]
    },
    learn: {
      title: 'E-Waste Essentials',
      cards: [
        { front: 'E-Waste', back: 'Discarded electrical or electronic devices.' },
        { front: 'Urban Mining', back: 'The process of recovering raw materials from waste products.' },
        { front: 'Toxins', back: 'Harmful substances like lead and mercury found in electronics.' },
        { front: 'Formal Recycling', back: 'Recycling done in specialized facilities that manage hazardous materials safely.' },
        { front: 'Life Extension', back: 'The practice of using a device for as long as possible through repair and maintenance.' },
        { front: 'Rare Earth Elements', back: 'A group of 17 elements critical for modern electronics.' },
        { front: 'Downcycling', back: 'Recycling that reduces material quality and functionality.' },
        { front: 'Closed-Loop Recycling', back: 'Recycling that creates new products of equal or better quality.' },
        { front: 'WEEE Directive', back: 'Waste Electrical and Electronic Equipment - EU law for proper e-waste disposal.' },
        { front: 'Extended Producer Responsibility', back: 'Policy making manufacturers responsible for end-of-life product disposal.' },
        { front: 'Device Lifecycle', back: 'The complete journey from manufacturing to disposal or recycling.' },
        { front: 'Material Recovery', back: 'Extracting valuable materials from discarded electronics.' }
      ]
    },
    challenge: {
      type: 'scenario',
      title: 'The Old Laptop',
      intro: 'Your old laptop finally stops working. What should you do?',
      questions: [
        {
          text: 'What is the absolute WORST thing you can do?',
          options: [
            { text: 'Take it to a recycler.', correct: false },
            { text: 'Throw it in the regular garbage.', correct: true },
            { text: 'Try to repair it.', correct: false }
          ],
          feedback: 'Regular garbage leads to toxic leaks in landfills.'
        },
        {
          text: 'What percentage of e-waste is currently recycled formally?',
          options: [
            { text: 'About 20%', correct: true },
            { text: 'About 50%', correct: false },
            { text: 'About 80%', correct: false }
          ],
          feedback: 'The majority of e-waste ends up in landfills or is processed unsafely.'
        },
        {
          text: 'How many different elements are in a single smartphone?',
          options: [
            { text: 'Over 60', correct: true },
            { text: 'About 10', correct: false },
            { text: 'About 5', correct: false }
          ],
          feedback: 'Smartphones contain many valuable and rare materials.'
        },
        {
          text: 'What can be recovered from recycling 1 million cell phones?',
          options: [
            { text: '35,000 lbs copper, 772 lbs silver', correct: true },
            { text: '1,000 lbs gold', correct: false },
            { text: '100,000 lbs plastic', correct: false }
          ],
          feedback: 'Urban mining recovers significant precious metals.'
        },
        {
          text: 'Which toxic substance is commonly found in e-waste?',
          options: [
            { text: 'Lead', correct: true },
            { text: 'Salt', correct: false },
            { text: 'Sugar', correct: false }
          ],
          feedback: 'Lead, mercury, and cadmium are common e-waste toxins.'
        },
        {
          text: 'How much can extending device life reduce carbon footprint?',
          options: [
            { text: 'Up to 50%', correct: true },
            { text: 'About 5%', correct: false },
            { text: 'About 1%', correct: false }
          ],
          feedback: 'Using a phone for 4 years vs 2 years cuts footprint significantly.'
        },
        {
          text: 'What is the "Right to Repair" movement about?',
          options: [
            { text: 'Making it easier for consumers to fix devices', correct: true },
            { text: 'Requiring repairs within 24 hours', correct: false },
            { text: 'Banning all repairs', correct: false }
          ],
          feedback: 'It advocates for parts and manuals availability for consumers.'
        },
        {
          text: 'Which is the fastest growing waste stream globally?',
          options: [
            { text: 'E-waste', correct: true },
            { text: 'Plastic waste', correct: false },
            { text: 'Paper waste', correct: false }
          ],
          feedback: 'Electronic waste is the fastest growing waste stream.'
        }
      ]
    }
  },
  'ai-sustainability': {
    id: 'ai-sustainability',
    title: 'Mission 3: The AI Power Surge',
    badgeName: 'AI Ethicist',
    icon: 'Cpu',
    badgeIcon: 'Brain',
    description: 'Explore the massive energy requirements of Artificial Intelligence and how to use it responsibly.',
    knowledge: {
      title: 'AI and Energy',
      pages: [
        { text: "AI models like ChatGPT require enormous amounts of computing power to train and run." },
        { text: "Training a single large AI model can emit as much carbon as five cars in their lifetimes." },
        { text: "Data centers housing AI models consume massive amounts of water for cooling." },
        { text: "AI can help solve climate change by optimizing energy grids, but its own footprint is growing." },
        { text: "Generative AI queries use about 10x more electricity than a standard Google search." },
        { text: "The 'Large' in Large Language Models refers to the billions of parameters they use." },
        { text: "Processing these parameters requires specialized hardware like GPUs which are power-hungry." },
        { text: "Researchers are working on 'Green AI' to make models more efficient." },
        { text: "Using AI for simple tasks that a search engine could do might be wasting energy." },
        { text: "Transparency about the carbon footprint of AI models is a major goal for the industry." }
      ]
    },
    learn: {
      title: 'AI Intelligence',
      cards: [
        { front: 'GPU', back: 'Graphics Processing Unit, used heavily for AI computations.' },
        { front: 'Parameters', back: 'The variables in an AI model that are learned during training.' },
        { front: 'Green AI', back: 'Research into making AI models more energy-efficient.' },
        { front: 'Inference', back: 'The process of using a trained AI model to make predictions or generate content.' },
        { front: 'Water Footprint', back: 'The amount of water used to cool the servers running AI models.' },
        { front: 'Training Data', back: 'The dataset used to teach an AI model to recognize patterns.' },
        { front: 'Transformer Model', back: 'A deep learning architecture that processes sequential data efficiently.' },
        { front: 'Token', back: 'A unit of text or data that an AI processes individually.' },
        { front: 'Model Distillation', back: 'Creating smaller, more efficient versions of large AI models.' },
        { front: 'Energy-Aware Computing', back: 'Designing systems to optimize power consumption.' },
        { front: 'Carbon-Aware AI', back: 'Running AI tasks during times of lower carbon intensity.' },
        { front: 'Neural Network', back: 'A computing system inspired by biological neural networks.' }
      ]
    },
    challenge: {
      type: 'quiz',
      title: 'Smart AI Usage',
      intro: 'Test your knowledge on the environmental impact of AI.',
      questions: [
        {
          text: 'Why does AI use so much energy?',
          options: [
            { text: 'It needs to "think" really hard.', correct: false },
            { text: 'Thousands of powerful GPUs run 24/7 in data centers.', correct: true },
            { text: 'It uses magic.', correct: false }
          ],
          feedback: 'Data centers housing AI models consume massive amounts of power for both computation and cooling.'
        },
        {
          text: 'How much more electricity does an AI query use compared to a standard search?',
          options: [
            { text: 'About 2x', correct: false },
            { text: 'About 10x', correct: true },
            { text: 'About 100x', correct: false }
          ],
          feedback: 'Generative AI is significantly more resource-intensive than traditional search.'
        },
        {
          text: 'What is the carbon footprint of training a large AI model compared to a car?',
          options: [
            { text: 'Similar to driving 100 miles', correct: false },
            { text: 'Equivalent to five cars over their lifetimes', correct: true },
            { text: 'Less than a bicycle', correct: false }
          ],
          feedback: 'Training a single large AI model can emit as much carbon as five cars in their lifetimes.'
        },
        {
          text: 'What does "Green AI" aim to do?',
          options: [
            { text: 'Make AI models green in color', correct: false },
            { text: 'Make AI models more energy-efficient', correct: true },
            { text: 'Replace AI with human decision-making', correct: false }
          ],
          feedback: 'Green AI focuses on reducing the energy consumption and carbon emissions of AI systems.'
        },
        {
          text: 'What is "inference" in AI?',
          options: [
            { text: 'The process of training an AI model', correct: false },
            { text: 'Using a trained model to make predictions', correct: true },
            { text: 'The storage of AI data', correct: false }
          ],
          feedback: 'Inference is when a trained AI model is used to generate outputs from new inputs.'
        },
        {
          text: 'Why do AI data centers use a lot of water?',
          options: [
            { text: 'For drinking for workers', correct: false },
            { text: 'For cooling the servers', correct: true },
            { text: 'To create hydrogen fuel', correct: false }
          ],
          feedback: 'Data centers require massive amounts of water to cool the GPUs and servers running AI models.'
        },
        {
          text: 'What is "model distillation"?',
          options: [
            { text: 'Distilling water for data centers', correct: false },
            { text: 'Creating smaller, more efficient versions of large AI models', correct: true },
            { text: 'Teaching AI about liquids', correct: false }
          ],
          feedback: 'Model distillation creates compact versions of large AI models that require less energy to run.'
        },
        {
          text: 'Which task would be most wasteful to use AI for?',
          options: [
            { text: 'Complex data analysis', correct: false },
            { text: 'A simple web search that a search engine could handle', correct: true },
            { text: 'Language translation', correct: false }
          ],
          feedback: 'Using energy-intensive AI for simple tasks that traditional tools can handle wastes significant energy.'
        }
      ]
    }
  },
  'green-hardware': {
    id: 'green-hardware',
    title: 'Mission 4: Built to Last',
    badgeName: 'Hardware Hero',
    icon: 'Wrench',
    badgeIcon: 'Hammer',
    description: 'Discover the importance of repairability and sustainable materials in our devices.',
    knowledge: {
      title: 'Right to Repair',
      pages: [
        { text: "Many devices are designed to be hard to fix. This is called 'planned obsolescence'." },
        { text: "Choosing repairable devices saves resources and reduces waste." },
        { text: "Look for <strong>Repairability Scores</strong> when buying new tech." },
        { text: "Using a phone for 4 years instead of 2 can cut its lifetime carbon footprint by 50%!" },
        { text: "Modular design allows users to swap out individual components like batteries or screens." },
        { text: "Fairphone and Framework are examples of companies focusing on modular, repairable hardware." },
        { text: "The manufacturing phase accounts for the majority of a smartphone's total carbon footprint." },
        { text: "Recycled plastics and metals are increasingly being used in new hardware." },
        { text: "Software updates can sometimes make older hardware obsolete; this is 'software-induced obsolescence'." },
        { text: "Supporting the 'Right to Repair' legislation helps ensure manufacturers provide parts and manuals." }
      ]
    },
    learn: {
      title: 'Hardware Heroics',
      cards: [
        { front: 'Planned Obsolescence', back: 'Designing products with a limited useful life.' },
        { front: 'Modular Design', back: 'A design approach that subdivides a system into smaller parts.' },
        { front: 'Repairability Score', back: 'A rating that indicates how easy a device is to repair.' },
        { front: 'Embodied Carbon', back: 'The CO2 emitted during the manufacture and transport of a product.' },
        { front: 'Refurbished', back: 'A used product that has been restored to like-new condition.' },
        { front: 'Right to Repair', back: 'The right of consumers to repair their own devices.' },
        { front: 'Fairphone', back: 'A modular smartphone designed for easy repair and longevity.' },
        { front: 'Framework', back: 'A laptop designed with fully replaceable and upgradeable modules.' },
        { front: 'e-Waste Recycling Rate', back: 'The percentage of e-waste that gets properly recycled.' },
        { front: 'Design for Disassembly', back: 'Creating products that can be easily taken apart for repair.' },
        { front: 'Spare Parts', back: 'Replacement components available for repairing devices.' },
        { front: 'Software Support', back: 'Updates and security patches provided for devices over time.' }
      ]
    },
    challenge: {
      type: 'matching',
      title: 'Hardware Match',
      intro: 'Match the term to its sustainable definition.',
      pairs: [
        { left: 'Modular Design', right: 'Easy to swap parts' },
        { left: 'Planned Obsolescence', right: 'Designed to break' },
        { left: 'Refurbished', right: 'Used but restored' },
        { left: 'Embodied Carbon', right: 'Manufacturing emissions' },
        { left: 'Repairability Score', right: 'Measures how easy to fix' },
        { left: 'Right to Repair', right: 'Consumer right to fix devices' },
        { left: 'Fairphone', right: 'Modular smartphone brand' },
        { left: 'Framework', right: 'Repairable laptop brand' }
      ]
    }
  },
  'iot-impact': {
    id: 'iot-impact',
    title: 'Mission 5: The Connected World',
    badgeName: 'IoT Inspector',
    icon: 'Wifi',
    badgeIcon: 'Network',
    description: 'Understand the cumulative impact of billions of "smart" devices in our homes.',
    knowledge: {
      title: 'Billions of Devices',
      pages: [
        { text: "The Internet of Things (IoT) includes smart fridges, bulbs, and watches." },
        { text: "By 2030, there could be 30 billion connected devices globally." },
        { text: "Each device uses a small amount of 'standby' power, but together they create a huge demand." },
        { text: "Only buy 'smart' if it actually adds value or saves energy (like a smart thermostat)." },
        { text: "Many IoT devices lack proper security, making them vulnerable to botnets." },
        { text: "The production of billions of sensors requires significant rare earth minerals." },
        { text: "Always-on connectivity means constant data transfer to the cloud." },
        { text: "Smart home hubs can help coordinate devices to reduce overall energy use." },
        { text: "Consider the 'vampire power' draw of devices that are plugged in but not in use." },
        { text: "The lifecycle of an IoT device is often shorter than its non-smart counterpart." }
      ]
    },
    learn: {
      title: 'IoT Insights',
      cards: [
        { front: 'IoT', back: 'Internet of Things - a network of physical objects connected to the internet.' },
        { front: 'Standby Power', back: 'The power consumed by an appliance when it is switched off or in standby mode.' },
        { front: 'Vampire Power', back: 'Another term for standby power, as it "sucks" energy silently.' },
        { front: 'Smart Thermostat', back: 'A device that can learn your habits and optimize heating/cooling to save energy.' },
        { front: 'Rare Earth Minerals', back: 'A group of 17 chemical elements used in many high-tech devices.' },
        { front: 'Smart Hub', back: 'A central device that connects and controls multiple smart home devices.' },
        { front: 'Zigbee', back: 'A low-power wireless communication protocol for smart home devices.' },
        { front: 'Z-Wave', back: 'Another wireless protocol designed for home automation.' },
        { front: 'Energy Monitoring', back: 'Tracking electricity usage of connected devices in real-time.' },
        { front: 'Home Automation', back: 'Using technology to control home devices automatically.' },
        { front: 'Sensor Network', back: 'A collection of sensors that monitor environmental conditions.' },
        { front: 'Edge Device', back: 'Computing hardware that processes data near where it is generated.' }
      ]
    },
    challenge: {
      type: 'sorting',
      title: 'Smart or Not?',
      intro: 'Sort these devices based on their typical energy impact.',
      items: [
        { id: 'bulb', name: 'Smart Bulb', type: 'low', icon: '💡' },
        { id: 'fridge', name: 'Smart Fridge', type: 'high', icon: '🧊' },
        { id: 'watch', name: 'Smart Watch', type: 'low', icon: '⌚' },
        { id: 'ac', name: 'Smart AC', type: 'high', icon: '❄️' },
        { id: 'sensor', name: 'Motion Sensor', type: 'low', icon: '📡' },
        { id: 'heater', name: 'Smart Heater', type: 'high', icon: '🔥' },
        { id: 'plug', name: 'Smart Plug', type: 'low', icon: '🔌' },
        { id: 'washer', name: 'Smart Washer', type: 'high', icon: '🧺' }
      ],
      bins: [
        { id: 'low', name: 'Low Impact', color: 'border-green-500 bg-green-500/20', accept: ['low'] },
        { id: 'high', name: 'High Impact', color: 'border-red-500 bg-red-500/20', accept: ['high'] }
      ]
    }
  },
  'green-web': {
    id: 'green-web',
    title: 'Mission 6: The Green Web',
    badgeName: 'Pixel Purifier',
    icon: 'Layout',
    badgeIcon: 'Image',
    description: 'Learn how web design choices impact the energy consumption of the internet.',
    knowledge: {
      title: 'Sustainable Web Design',
      pages: [
        { text: "Websites can be heavy! Large images and unoptimized code increase energy use." },
        { text: "Using modern formats like WebP instead of PNG can reduce file sizes by 30%." },
        { text: "Lazy loading only loads images when they are about to scroll into view." },
        { text: "Minifying CSS and JavaScript files reduces the amount of data transferred." },
        { text: "Dark mode can save energy on OLED screens where black pixels are 'off'." },
        { text: "Choosing a green hosting provider means your site runs on renewable energy." },
        { text: "Reducing the number of HTTP requests makes a site load faster and use less power." },
        { text: "Static site generators are often more efficient than dynamic CMS platforms." },
        { text: "A 'weight budget' for a website helps keep it fast and eco-friendly." },
        { text: "User experience (UX) design that helps users find info quickly also saves energy." }
      ]
    },
    learn: {
      title: 'Web Wisdom',
      cards: [
        { front: 'Lazy Loading', back: 'Delaying the loading of non-critical resources at page load time.' },
        { front: 'WebP', back: 'A modern image format that provides superior lossless and lossy compression.' },
        { front: 'Minification', back: 'The process of removing unnecessary characters from code without changing its functionality.' },
        { front: 'Green Hosting', back: 'Web hosting powered by renewable energy sources.' },
        { front: 'OLED', back: 'Organic Light Emitting Diode - a display technology where each pixel produces its own light.' },
        { front: 'CDN', back: 'Content Delivery Network - servers distributed globally to deliver content faster.' },
        { front: 'Caching', back: 'Storing copies of files temporarily to reduce load times and server usage.' },
        { front: 'HTTP Request', back: 'A message sent from a client to a server to request content.' },
        { front: 'Responsive Design', back: 'Creating websites that adapt to different screen sizes efficiently.' },
        { front: 'AMP', back: 'Accelerated Mobile Pages - lightweight web pages for fast loading.' },
        { front: 'Core Web Vitals', back: 'Google metrics measuring user experience on websites.' },
        { front: 'Progressive Web App', back: 'Web applications that function like native mobile apps.' }
      ]
    },
    challenge: {
      type: 'quiz',
      title: 'Web Efficiency',
      intro: 'Test your knowledge on green web design principles.',
      questions: [
        {
          text: 'What is "Lazy Loading"?',
          options: [
            { text: 'Loading images only when needed.', correct: true },
            { text: 'A slow internet connection.', correct: false },
            { text: 'A website that takes a long time to load.', correct: false }
          ],
          feedback: 'Lazy loading saves energy by not downloading content that the user might never see.'
        },
        {
          text: 'Which image format is generally most efficient for the web?',
          options: [
            { text: 'PNG', correct: false },
            { text: 'WebP', correct: true },
            { text: 'BMP', correct: false }
          ],
          feedback: 'WebP offers better compression than older formats like PNG or JPEG.'
        },
        {
          text: 'What is "minification" in web development?',
          options: [
            { text: 'Making text smaller on the page', correct: false },
            { text: 'Removing unnecessary characters from code', correct: true },
            { text: 'Compressing images', correct: false }
          ],
          feedback: 'Minification removes whitespace and comments from code to reduce file size.'
        },
        {
          text: 'Why does dark mode save energy on OLED screens?',
          options: [
            { text: 'It uses less battery', correct: false },
            { text: 'Black pixels are "off" and produce no light', correct: true },
            { text: 'It requires less processing power', correct: false }
          ],
          feedback: 'OLED displays have self-illuminating pixels, so black pixels use zero energy.'
        },
        {
          text: 'What is "green hosting"?',
          options: [
            { text: 'Web hosting with green color scheme', correct: false },
            { text: 'Web hosting powered by renewable energy', correct: true },
            { text: 'Free web hosting', correct: false }
          ],
          feedback: 'Green hosting providers power their data centers with renewable energy sources.'
        },
        {
          text: 'What is a "weight budget" in web design?',
          options: [
            { text: 'A diet plan for website owners', correct: false },
            { text: 'A limit on the total data size of a webpage', correct: true },
            { text: 'The cost of hosting a website', correct: false }
          ],
          feedback: 'A weight budget helps keep websites fast and eco-friendly by limiting data transfer.'
        },
        {
          text: 'What does a CDN (Content Delivery Network) do?',
          options: [
            { text: 'Creates website content automatically', correct: false },
            { text: 'Delivers content from servers close to the user', correct: true },
            { text: 'Deletes old website files', correct: false }
          ],
          feedback: 'CDNs reduce latency and energy by serving content from geographically nearby servers.'
        },
        {
          text: 'Why are static site generators more efficient than dynamic CMS?',
          options: [
            { text: 'They use more servers', correct: false },
            { text: 'They pre-build pages and serve them directly', correct: true },
            { text: 'They require more database queries', correct: false }
          ],
          feedback: 'Static sites skip database queries and server-side processing, reducing energy use.'
        }
      ]
    }
  },
  'data-centers': {
    id: 'data-centers',
    title: 'Mission 7: The Data Fortress',
    badgeName: 'Cloud Architect',
    icon: 'Server',
    badgeIcon: 'Cloud',
    description: 'Go inside the massive data centers that power the cloud and see how they can go green.',
    knowledge: {
      title: 'Inside the Data Center',
      pages: [
        { text: "Data centers are the heart of the internet, housing thousands of servers." },
        { text: "They require massive cooling systems to prevent overheating." },
        { text: "PUE (Power Usage Effectiveness) is a metric for data center efficiency." },
        { text: "A PUE of 1.0 is perfect efficiency; most modern centers aim for 1.1 or 1.2." },
        { text: "Some data centers are built in cold climates to use natural 'free cooling'." },
        { text: "Underwater data centers use the ocean's cold water for heat exchange." },
        { text: "Leading tech companies are powering their centers with 100% wind and solar." },
        { text: "Heat re-use involves piping excess server heat into local homes or greenhouses." },
        { text: "Hyperscale data centers are massive facilities that can optimize energy use at scale." },
        { text: "Edge computing brings data processing closer to the user, reducing network energy." }
      ]
    },
    learn: {
      title: 'Cloud Concepts',
      cards: [
        { front: 'PUE', back: 'Power Usage Effectiveness - total facility power divided by IT equipment power.' },
        { front: 'Free Cooling', back: 'Using outside air or water to cool a data center instead of mechanical refrigeration.' },
        { front: 'Hyperscale', back: 'An architecture that can scale significantly to meet massive demand.' },
        { front: 'Edge Computing', back: 'Processing data near the source of the data rather than in a central cloud.' },
        { front: 'Heat Re-use', back: 'Capturing waste heat from servers to use for other purposes.' },
        { front: 'Rack Density', back: 'The amount of power consumed by equipment in a single server rack.' },
        { front: 'Server Virtualization', back: 'Running multiple virtual servers on a single physical server.' },
        { front: 'Container Technology', back: 'Lightweight packaging of software with its dependencies.' },
        { front: 'Kubernetes', back: 'An open-source system for automating container deployment and scaling.' },
        { front: 'Airside Economizer', back: 'Using outside air directly for cooling when conditions are suitable.' },
        { front: 'Evaporative Cooling', back: 'Using water evaporation to cool air in data centers.' },
        { front: 'Liquid Cooling', back: 'Using liquid to absorb and transfer heat from servers.' }
      ]
    },
    challenge: {
      type: 'matching',
      title: 'Cloud Concepts',
      intro: 'Match the data center term to its description.',
      pairs: [
        { left: 'PUE', right: 'Efficiency Metric' },
        { left: 'Free Cooling', right: 'Using outside air' },
        { left: 'Hyperscale', right: 'Massive scale' },
        { left: 'Edge Computing', right: 'Local processing' },
        { left: 'Heat Re-use', right: 'Capturing waste heat' },
        { left: 'Server Virtualization', right: 'Multiple VMs on one server' },
        { left: 'Liquid Cooling', right: 'Using liquid to absorb heat' },
        { left: 'Airside Economizer', right: 'Direct outside air cooling' }
      ]
    }
  },
  'digital-minimalism': {
    id: 'digital-minimalism',
    title: 'Mission 8: Digital Minimalism',
    badgeName: 'Zen Master',
    icon: 'Minimize',
    badgeIcon: 'Wind',
    description: 'Master the art of intentional technology use to reduce both your footprint and your stress.',
    knowledge: {
      title: 'Less is More',
      pages: [
        { text: "Digital minimalism is about using technology intentionally." },
        { text: "Data hoarding in the cloud uses energy 24/7. Deleting old files is a green act!" },
        { text: "Turning off non-essential notifications reduces background data usage." },
        { text: "Unsubscribing from junk mail reduces the load on email servers." },
        { text: "A 'digital declutter' involves reviewing all your apps and accounts." },
        { text: "Intentionality means using tech for a specific purpose rather than mindless scrolling." },
        { text: "Digital well-being tools can help you track and limit your screen time." },
        { text: "The 'attention economy' is designed to keep you online for as long as possible." },
        { text: "Choosing quality over quantity in your digital life reduces your overall footprint." },
        { text: "A weekly 'digital sabbath' can help you reset and reconnect with the physical world." }
      ]
    },
    learn: {
      title: 'Minimalist Mantras',
      cards: [
        { front: 'Data Hoarding', back: 'Storing unnecessary files in the cloud indefinitely.' },
        { front: 'Intentionality', back: 'Using tech for a specific purpose rather than mindless scrolling.' },
        { front: 'Digital Declutter', back: 'Regularly deleting unused apps, photos, and emails.' },
        { front: 'Attention Economy', back: 'Business models that treat human attention as a scarce commodity.' },
        { front: 'Digital Sabbath', back: 'A designated period of time spent away from all digital devices.' },
        { front: 'Screen Time', back: 'The amount of time spent using a device with a screen.' },
        { front: 'Notification Fatigue', back: 'Overwhelm from excessive digital alerts and messages.' },
        { front: 'FOMO', back: 'Fear Of Missing Out - anxiety from seeing others\' online activities.' },
        { front: 'Do Not Disturb', back: 'A mode that silences notifications for focused time.' },
        { front: 'Digital Detox', back: 'A period of deliberately avoiding digital devices.' },
        { front: 'Mindful Usage', back: 'Being aware and intentional about technology use.' },
        { front: 'Zero-Base Inbox', back: 'Starting each day with an empty email inbox.' }
      ]
    },
    challenge: {
      type: 'quiz',
      title: 'Minimalist Mindset',
      intro: 'Are you ready to embrace digital minimalism?',
      questions: [
        {
          text: 'What is the primary goal of digital minimalism?',
          options: [
            { text: 'To quit the internet entirely.', correct: false },
            { text: 'To use technology intentionally for things you value.', correct: true },
            { text: 'To use the newest gadgets available.', correct: false }
          ],
          feedback: 'Minimalism is about focus and value, not total abstinence.'
        },
        {
          text: 'How does deleting old emails help the environment?',
          options: [
            { text: 'It makes your computer lighter.', correct: false },
            { text: 'It reduces the energy needed to store data on servers 24/7.', correct: true },
            { text: 'It saves paper.', correct: false }
          ],
          feedback: 'Every byte of data in the cloud requires energy to maintain.'
        },
        {
          text: 'What is "data hoarding" in the cloud?',
          options: [
            { text: 'Buying more cloud storage', correct: false },
            { text: 'Storing unnecessary files indefinitely', correct: true },
            { text: 'Deleting old files', correct: false }
          ],
          feedback: 'Data hoarding means keeping files you dont need, which wastes server energy.'
        },
        {
          text: 'What is the "attention economy"?',
          options: [
            { text: 'Trading stocks on screens', correct: false },
            { text: 'Business models that keep you online as long as possible', correct: true },
            { text: 'Counting screen time hours', correct: false }
          ],
          feedback: 'The attention economy treats human attention as a commodity to be monetized.'
        },
        {
          text: 'What is a "digital declutter"?',
          options: [
            { text: 'Cleaning your computer screen', correct: false },
            { text: 'Reviewing and removing unused apps, photos, and emails', correct: true },
            { text: 'Buying new digital devices', correct: false }
          ],
          feedback: 'Digital declutter involves intentionally removing digital clutter from your life.'
        },
        {
          text: 'How does unsubscribing from junk mail help the environment?',
          options: [
            { text: 'It saves paper', correct: false },
            { text: 'It reduces the load on email servers', correct: true },
            { text: 'It makes your inbox look cleaner', correct: false }
          ],
          feedback: 'Every email requires server processing; reducing junk reduces unnecessary energy use.'
        },
        {
          text: 'What is a "digital sabbath"?',
          options: [
            { text: 'A day without screens', correct: true },
            { text: 'A religious holiday online', correct: false },
            { text: 'A backup of your files', correct: false }
          ],
          feedback: 'A digital sabbath is a regular period of intentionally disconnecting from digital devices.'
        },
        {
          text: 'Which is the best approach to reduce your digital footprint?',
          options: [
            { text: 'Buy the latest devices every year', correct: false },
            { text: 'Use intentionality and focus on what truly matters', correct: true },
            { text: 'Stay online 24/7 to get things done faster', correct: false }
          ],
          feedback: 'Intentional technology use leads to both smaller footprint and less stress.'
        }
      ]
    }
  },
  'circular-economy': {
    id: 'circular-economy',
    title: 'Mission 9: The Loop',
    badgeName: 'Circular Champion',
    icon: 'RefreshCw',
    badgeIcon: 'Infinity',
    description: 'Learn how to move from a linear "take-make-waste" model to a circular one.',
    knowledge: {
      title: 'Closing the Loop',
      pages: [
        { text: "Our current economy is mostly <strong>linear</strong>: take, make, waste." },
        { text: "A <strong>Circular Economy</strong> keeps resources in use for as long as possible." },
        { text: "The 5 Rs: Refuse, Reduce, Reuse, Repurpose, Recycle." },
        { text: "Refurbished tech saves about 190kg of CO2 compared to buying new." },
        { text: "Sharing platforms (like tool libraries) reduce the need for everyone to own everything." },
        { text: "Design for disassembly makes it easier to recover materials at the end of life." },
        { text: "Product-as-a-service models mean companies retain ownership and responsibility for repair." },
        { text: "Biological materials should safely return to nature; technical ones should stay in the loop." },
        { text: "The circular economy aims to decouple economic growth from resource consumption." },
        { text: "You can support the loop by buying secondhand and choosing durable products." }
      ]
    },
    learn: {
      title: 'Circular Concepts',
      cards: [
        { front: 'Linear Economy', back: 'A "take-make-dispose" model of production and consumption.' },
        { front: 'Circular Economy', back: 'A model focused on eliminating waste and the continual use of resources.' },
        { front: 'The 5 Rs', back: 'Refuse, Reduce, Reuse, Repurpose, Recycle - in order of priority.' },
        { front: 'Refurbished', back: 'A used product that has been restored to a functional condition.' },
        { front: 'Design for Disassembly', back: 'Designing products so they can be easily taken apart for repair or recycling.' },
        { front: 'Upcycling', back: 'Transforming waste materials into better quality products.' },
        { front: 'Cradle to Cradle', back: 'A design principle where products are fully recyclable or biodegradable.' },
        { front: 'Product-as-a-Service', back: 'A model where customers pay for access rather than ownership.' },
        { front: 'Sharing Economy', back: 'A model where resources are shared among multiple users.' },
        { front: 'Take-Back Program', back: 'Manufacturers accepting old products for recycling.' },
        { front: 'Material Passport', back: 'A digital record of materials in a product for recycling.' },
        { front: 'Biomimicry', back: 'Designing products inspired by natural processes and systems.' }
      ]
    },
    challenge: {
      type: 'sorting',
      title: 'The 5 Rs Sort',
      intro: 'Sort these actions into the correct "R" category.',
      items: [
        { id: 'refuse', name: 'Say no to plastic', type: 'refuse', icon: '🚫' },
        { id: 'reuse', name: 'Use a glass bottle', type: 'reuse', icon: '🥛' },
        { id: 'recycle', name: 'Melt down glass', type: 'recycle', icon: '♻️' },
        { id: 'repair', name: 'Fix a broken screen', type: 'repair', icon: '🛠️' },
        { id: 'reduce', name: 'Buy fewer gadgets', type: 'reduce', icon: '📉' },
        { id: 'repurpose', name: 'Turn old t-shirt into bag', type: 'reuse', icon: '👜' },
        { id: 'refuse2', name: 'Decline free promotional items', type: 'refuse', icon: '❌' },
        { id: 'reduce2', name: 'Choose products with less packaging', type: 'reduce', icon: '📦' }
      ],
      bins: [
        { id: 'refuse', name: 'Refuse/Reduce', color: 'border-red-500 bg-red-500/20', accept: ['refuse', 'reduce'] },
        { id: 'reuse', name: 'Reuse/Repair', color: 'border-blue-500 bg-blue-500/20', accept: ['reuse', 'repair'] },
        { id: 'recycle', name: 'Recycle', color: 'border-green-500 bg-green-500/20', accept: ['recycle'] }
      ]
    }
  },
  'green-coding': {
    id: 'green-coding',
    title: 'Mission 10: The Green Coder',
    badgeName: 'Logic Legend',
    icon: 'Code',
    badgeIcon: 'Cpu',
    description: 'Discover how efficient algorithms and code can save energy on a global scale.',
    knowledge: {
      title: 'Efficiency in Logic',
      pages: [
        { text: "Code runs on hardware, and hardware uses electricity." },
        { text: "Inefficient code wastes energy through redundant operations." },
        { text: "Choosing the right algorithm can reduce operations from millions to thousands." },
        { text: "Carbon-aware computing shifts tasks to when the grid is cleanest." },
        { text: "The Green Software Foundation provides standards for sustainable coding." },
        { text: "Measuring the carbon intensity of your software is the first step to improving it." },
        { text: "Reducing data transfer over the network saves energy in routers and cables." },
        { text: "Optimizing database queries reduces server load and power draw." },
        { text: "Sustainable software is often also faster and cheaper to run." },
        { text: "Every developer has the power to write more eco-friendly code." }
      ]
    },
    learn: {
      title: 'Coding Concepts',
      cards: [
        { front: 'Carbon Intensity', back: 'The amount of carbon emitted per kilowatt-hour of electricity.' },
        { front: 'Carbon-Awareness', back: 'Building software that does more when the grid is powered by renewables.' },
        { front: 'Algorithmic Efficiency', back: 'The property of an algorithm which relates to the amount of resources used.' },
        { front: 'Green Software', back: 'Software that is responsible for emitting the least amount of greenhouse gases possible.' },
        { front: 'Network Efficiency', back: 'Reducing the amount of data sent over the internet to save energy.' },
        { front: 'Code Optimization', back: 'Improving code to execute faster with fewer resources.' },
        { front: 'Server-Side Rendering', back: 'Generating web pages on the server to reduce client processing.' },
        { front: 'Static Site Generation', back: 'Building websites as static files for faster, more efficient loading.' },
        { front: 'Database Query Optimization', back: 'Writing efficient database queries to reduce server load.' },
        { front: 'API Efficiency', back: 'Designing APIs to minimize data transfer and processing.' },
        { front: 'Caching Strategy', back: 'Storing frequently accessed data to reduce repeated computations.' },
        { front: 'Load Balancing', back: 'Distributing workloads across multiple servers for efficiency.' }
      ]
    },
    challenge: {
      type: 'quiz',
      title: 'Coding for Climate',
      intro: 'Test your knowledge on sustainable software engineering.',
      questions: [
        {
          text: 'What is "Carbon-Aware Computing"?',
          options: [
            { text: 'Running tasks when renewable energy is high.', correct: true },
            { text: 'Coding with a pencil and paper.', correct: false },
            { text: 'Using a computer made of wood.', correct: false }
          ],
          feedback: 'Carbon-aware computing shifts energy-intensive tasks to times and places where the grid is powered by renewables.'
        },
        {
          text: 'How can developers reduce the energy use of their apps?',
          options: [
            { text: 'By making the code more complex.', correct: false },
            { text: 'By optimizing algorithms and reducing data transfer.', correct: true },
            { text: 'By using more servers.', correct: false }
          ],
          feedback: 'Efficiency in logic and data leads directly to energy savings.'
        },
        {
          text: 'Which foundation provides standards for green software?',
          options: [
            { text: 'The Green Software Foundation', correct: true },
            { text: 'The Internet Society', correct: false },
            { text: 'The W3C', correct: false }
          ],
          feedback: 'The Green Software Foundation is dedicated to building a sustainable future for software.'
        },
        {
          text: 'What is "algorithmic efficiency"?',
          options: [
            { text: 'Writing code quickly', correct: false },
            { text: 'The amount of resources an algorithm uses', correct: true },
            { text: 'Making algorithms look good', correct: false }
          ],
          feedback: 'Algorithmic efficiency refers to how much computing resources an algorithm requires.'
        },
        {
          text: 'What is "carbon intensity"?',
          options: [
            { text: 'How dark a website is', correct: false },
            { text: 'The amount of carbon per kilowatt-hour of electricity', correct: true },
            { text: 'The weight of code', correct: false }
          ],
          feedback: 'Carbon intensity measures how much carbon is emitted for each unit of electricity consumed.'
        },
        {
          text: 'Why does optimizing database queries help the environment?',
          options: [
            { text: 'It makes databases prettier', correct: false },
            { text: 'It reduces server load and power draw', correct: true },
            { text: 'It uses less water', correct: false }
          ],
          feedback: 'Efficient queries require less computation, which means less energy consumed by servers.'
        },
        {
          text: 'What is a "caching strategy"?',
          options: [
            { text: 'Hiding code from users', correct: false },
            { text: 'Storing frequently accessed data to reduce repeated computations', correct: true },
            { text: 'Deleting old code', correct: false }
          ],
          feedback: 'Caching stores data temporarily so it does not need to be recalculated or fetched repeatedly.'
        },
        {
          text: 'What is "network efficiency" in green coding?',
          options: [
            { text: 'Using faster internet connections', correct: false },
            { text: 'Reducing the amount of data sent over the internet to save energy', correct: true },
            { text: 'Writing code at a network hub', correct: false }
          ],
          feedback: 'Network efficiency means minimizing data transfer to reduce energy use in routers and cables.'
        }
      ]
    }
  },
  'cloud-gaming': {
    id: 'cloud-gaming',
    title: 'Mission 11: The Gaming Grid',
    badgeName: 'Eco Gamer',
    icon: 'Gamepad2',
    badgeIcon: 'Joystick',
    description: 'Explore the energy trade-offs between local gaming and cloud-based streaming.',
    knowledge: {
      title: 'Gaming and the Planet',
      pages: [
        { text: "Gaming is a massive industry with a significant energy footprint." },
        { text: "Local gaming on a powerful PC uses a lot of electricity in your home." },
        { text: "Cloud gaming shifts the energy use to data centers and the network." },
        { text: "Streaming a game can use more energy overall than playing it locally on a console." },
        { text: "High-end GPUs in gaming PCs can draw over 400 watts of power." },
        { text: "Cloud gaming requires a constant, high-bandwidth connection, which uses network energy." },
        { text: "Downloading a game once is often more efficient than streaming it multiple times." },
        { text: "Energy-saving modes on consoles can reduce standby power consumption." },
        { text: "The manufacturing of gaming hardware also has a large carbon footprint." },
        { text: "Choosing indie games or less graphically intense titles can reduce your energy use." }
      ]
    },
    learn: {
      title: 'Gamer Knowledge',
      cards: [
        { front: 'Cloud Gaming', back: 'Streaming games from a remote server rather than playing locally.' },
        { front: 'GPU Power Draw', back: 'The amount of electricity consumed by a graphics card.' },
        { front: 'Bandwidth', back: 'The maximum rate of data transfer across a given path.' },
        { front: 'Standby Mode', back: 'A low-power state for electronic devices.' },
        { front: 'Digital Distribution', back: 'Downloading games instead of buying physical discs.' },
        { front: 'Ray Tracing', back: 'A rendering technique simulating realistic light behavior.' },
        { front: 'Frame Rate', back: 'The number of frames displayed per second in gaming.' },
        { front: 'VRAM', back: 'Video Random Access Memory - dedicated memory for graphics processing.' },
        { front: 'TDP', back: 'Thermal Design Power - the maximum amount of heat generated by a chip.' },
        { front: 'Local Gaming', back: 'Running games directly on personal hardware.' },
        { front: 'Game Streaming', back: 'Broadcasting gameplay over the internet to viewers.' },
        { front: 'Energy Save Mode', back: 'Console settings that reduce power consumption.' }
      ]
    },
    challenge: {
      type: 'scenario',
      title: 'The Gaming Choice',
      intro: 'You want to play a new blockbuster game. Which choice is more eco-friendly?',
      questions: [
        {
          text: 'If you plan to play for 100 hours, which is usually better?',
          options: [
            { text: 'Streaming it via the cloud.', correct: false },
            { text: 'Downloading it to your console.', correct: true },
            { text: 'Buying a physical disc.', correct: false }
          ],
          feedback: 'Downloading once is more efficient than streaming the same data for 100 hours.'
        },
        {
          text: 'What is a major energy cost of cloud gaming?',
          options: [
            { text: 'The plastic in the controller.', correct: false },
            { text: 'The constant network data transfer.', correct: true },
            { text: 'The sound of the fan.', correct: false }
          ],
          feedback: 'Maintaining a high-speed video stream requires significant network infrastructure energy.'
        },
        {
          text: 'How much power can a high-end gaming GPU draw?',
          options: [
            { text: 'About 50 watts', correct: false },
            { text: 'Over 400 watts', correct: true },
            { text: 'About 10 watts', correct: false }
          ],
          feedback: 'High-end GPUs can draw over 400 watts, significantly impacting electricity usage.'
        },
        {
          text: 'Which gaming approach has the largest manufacturing footprint?',
          options: [
            { text: 'Playing on a phone', correct: false },
            { text: 'Buying a new gaming PC or console', correct: true },
            { text: 'Using cloud gaming', correct: false }
          ],
          feedback: 'Manufacturing gaming hardware has a large carbon footprint due to rare earth minerals and production processes.'
        },
        {
          text: 'What is the most eco-friendly game type to play?',
          options: [
            { text: 'Graphically intense AAA games', correct: false },
            { text: 'Indie games or less graphically intense titles', correct: true },
            { text: 'VR games', correct: false }
          ],
          feedback: 'Less graphically intense games require less processing power and thus less energy.'
        },
        {
          text: 'What should you do with your console to save energy?',
          options: [
            { text: 'Keep it in rest mode always', correct: false },
            { text: 'Use energy-saving modes and fully shut down when not in use', correct: true },
            { text: 'Unplug the TV instead', correct: false }
          ],
          feedback: 'Energy-saving modes reduce standby power consumption significantly.'
        },
        {
          text: 'Why is digital distribution generally better than physical discs?',
          options: [
            { text: 'Physical discs are free', correct: false },
            { text: 'It eliminates manufacturing and shipping emissions', correct: true },
            { text: 'Digital games are always better', correct: false }
          ],
          feedback: 'Digital distribution eliminates the manufacturing and transportation of physical media.'
        },
        {
          text: 'What is "TDP" in gaming hardware?',
          options: [
            { text: 'Time Display Protocol', correct: false },
            { text: 'Thermal Design Power - maximum heat generated', correct: true },
            { text: 'Texture Display Processor', correct: false }
          ],
          feedback: 'TDP indicates the maximum amount of heat a chip will generate, relating to energy efficiency.'
        }
      ]
    }
  },
  'blockchain-impact': {
    id: 'blockchain-impact',
    title: 'Mission 12: The Chain Reaction',
    badgeName: 'Block Auditor',
    icon: 'Link',
    badgeIcon: 'Shield',
    description: 'Understand the environmental controversy surrounding cryptocurrencies and blockchain technology.',
    knowledge: {
      title: 'Blockchain and Carbon',
      pages: [
        { text: "Blockchain is a decentralized ledger technology." },
        { text: "Some blockchains use 'Proof of Work' (PoW), which is extremely energy-intensive." },
        { text: "PoW requires miners to solve complex puzzles using powerful computers." },
        { text: "Bitcoin's energy use has been compared to that of entire countries." },
        { text: "'Proof of Stake' (PoS) is a much more energy-efficient alternative." },
        { text: "Ethereum's transition to PoS reduced its energy use by over 99%." },
        { text: "NFTs (Non-Fungible Tokens) also have a footprint depending on the blockchain they use." },
        { text: "Green blockchains are emerging that use renewable energy or carbon offsets." },
        { text: "The e-waste from specialized mining hardware (ASICs) is a growing problem." },
        { text: "Blockchain can also be used for good, like tracking carbon credits transparently." }
      ]
    },
    learn: {
      title: 'Crypto Concepts',
      cards: [
        { front: 'Proof of Work', back: 'A consensus mechanism that requires significant computational effort.' },
        { front: 'Proof of Stake', back: 'A consensus mechanism that is much more energy-efficient than PoW.' },
        { front: 'Mining', back: 'The process of validating transactions and adding them to a PoW blockchain.' },
        { front: 'ASIC', back: 'Application-Specific Integrated Circuit - hardware designed for a single task like mining.' },
        { front: 'Decentralization', back: 'The transfer of control from a central entity to a distributed network.' },
        { front: 'Blockchain', back: 'A distributed ledger that records transactions across many computers.' },
        { front: 'Wallet', back: 'A software application that stores cryptographic keys for cryptocurrency transactions.' },
        { front: 'Smart Contract', back: 'Self-executing contracts with terms directly written into code.' },
        { front: 'NFT', back: 'Non-Fungible Token - a unique digital asset representing ownership of items.' },
        { front: 'Token', back: 'A digital asset representing a utility or value on a blockchain.' },
        { front: 'Gas Fee', back: 'The transaction fee required to execute operations on a blockchain.' },
        { front: 'The Merge', back: 'Ethereum\'s transition from Proof of Work to Proof of Stake.' }
      ]
    },
    challenge: {
      type: 'quiz',
      title: 'Blockchain Basics',
      intro: 'Test your understanding of blockchain\'s environmental impact.',
      questions: [
        {
          text: 'Which consensus mechanism is more eco-friendly?',
          options: [
            { text: 'Proof of Work', correct: false },
            { text: 'Proof of Stake', correct: true },
            { text: 'Proof of Effort', correct: false }
          ],
          feedback: 'Proof of Stake uses a fraction of the energy required by Proof of Work.'
        },
        {
          text: 'By how much did Ethereum reduce its energy use after "The Merge"?',
          options: [
            { text: 'About 10%', correct: false },
            { text: 'About 50%', correct: false },
            { text: 'Over 99%', correct: true }
          ],
          feedback: 'The transition to Proof of Stake was a massive win for digital sustainability.'
        },
        {
          text: 'What is "mining" in blockchain?',
          options: [
            { text: 'Digging for cryptocurrency underground', correct: false },
            { text: 'Validating transactions using powerful computers', correct: true },
            { text: 'Creating new coins in a factory', correct: false }
          ],
          feedback: 'Mining uses computational power to validate transactions and secure the network.'
        },
        {
          text: 'What is an "ASIC" in cryptocurrency?',
          options: [
            { text: 'A type of cryptocurrency', correct: false },
            { text: 'Specialized hardware designed for mining', correct: true },
            { text: 'A software program', correct: false }
          ],
          feedback: 'ASICs are Application-Specific Integrated Circuits built for specific tasks like mining.'
        },
        {
          text: 'What problem does e-waste from mining create?',
          options: [
            { text: 'Too much paper waste', correct: false },
            { text: 'Specialized mining hardware becomes obsolete', correct: true },
            { text: 'Water pollution', correct: false }
          ],
          feedback: 'ASIC mining hardware becomes obsolete quickly, creating significant electronic waste.'
        },
        {
          text: 'How does blockchain help track carbon credits?',
          options: [
            { text: 'By creating fake credits', correct: false },
            { text: 'Through transparent, immutable record-keeping', correct: true },
            { text: 'By using more energy', correct: false }
          ],
          feedback: 'Blockchain can provide transparent tracking of carbon credits to prevent fraud.'
        },
        {
          text: 'What is an "NFT"?',
          options: [
            { text: 'Non-Fungible Token - a unique digital asset', correct: true },
            { text: 'A type of cryptocurrency', correct: false },
            { text: 'A bank account number', correct: false }
          ],
          feedback: 'NFTs are unique digital assets that can represent ownership of items.'
        },
        {
          text: 'What are "gas fees" on a blockchain?',
          options: [
            { text: 'Fees to fill up a car with fuel', correct: false },
            { text: 'Transaction fees required to execute operations', correct: true },
            { text: 'Monthly subscription costs', correct: false }
          ],
          feedback: 'Gas fees are the transaction costs required to execute smart contracts on a blockchain.'
        }
      ]
    }
  },
  'renewable-energy': {
    id: 'renewable-energy',
    title: 'Mission 13: Powering the Future',
    badgeName: 'Solar Surveyor',
    icon: 'Sun',
    badgeIcon: 'Zap',
    description: 'Explore how renewable energy sources like solar and wind are being used to power our digital lives.',
    knowledge: {
      title: 'Clean Energy for Tech',
      pages: [
        { text: "Data centers use a lot of power, but it doesn't have to be 'dirty' power." },
        { text: "Renewable energy comes from sources that don't run out, like the sun and wind." },
        { text: "Many tech giants are now the world's largest corporate buyers of renewable energy." },
        { text: "A 'Power Purchase Agreement' (PPA) allows a company to fund a new wind or solar farm." },
        { text: "The challenge is 'intermittency'—the sun doesn't always shine and the wind doesn't always blow." },
        { text: "Data centers are experimenting with massive batteries to store clean energy for later use." },
        { text: "Some centers are even being built near geothermal sources for 24/7 clean power." },
        { text: "Nuclear energy is also being considered as a carbon-free 'baseload' for data centers." },
        { text: "As a user, you can support companies that are transparent about their energy mix." },
        { text: "Green energy isn't just good for the planet; it's becoming the cheapest way to power the web." }
      ]
    },
    learn: {
      title: 'Clean Energy Concepts',
      cards: [
        { front: 'Renewable Energy', back: 'Energy from a source that is not depleted when used.' },
        { front: 'PPA', back: 'Power Purchase Agreement - a contract to buy electricity directly from a generator.' },
        { front: 'Intermittency', back: 'The characteristic of energy sources that are not available at all times.' },
        { front: 'Baseload', back: 'The minimum amount of electric power delivered to a grid at any time.' },
        { front: 'Geothermal', back: 'Energy derived from the heat of the earth.' },
        { front: 'Solar Farm', back: 'A large installation of solar panels to generate electricity.' },
        { front: 'Wind Farm', back: 'A collection of wind turbines generating renewable electricity.' },
        { front: 'Grid', back: 'The network of power lines delivering electricity to users.' },
        { front: 'Carbon Neutral', back: 'Balancing carbon emissions with carbon removal or offsets.' },
        { front: 'Energy Storage', back: 'Technology like batteries that store energy for later use.' },
        { front: 'Smart Grid', back: 'An electricity network using digital technology for efficiency.' },
        { front: 'Virtual Power Plant', back: 'A network of distributed energy resources managed together.' }
      ]
    },
    challenge: {
      type: 'quiz',
      title: 'Renewable Review',
      intro: 'Test your knowledge on how we power the digital world sustainably.',
      questions: [
        {
          text: 'What is a "Power Purchase Agreement" (PPA)?',
          options: [
            { text: 'A contract to buy clean energy directly.', correct: true },
            { text: 'A bill for your home electricity.', correct: false },
            { text: 'A type of solar panel.', correct: false }
          ],
          feedback: 'PPAs are a key tool for companies to bring new renewable energy onto the grid.'
        },
        {
          text: 'What is the main challenge with solar and wind power?',
          options: [
            { text: 'They are too expensive.', correct: false },
            { text: 'They are intermittent (not always available).', correct: true },
            { text: 'They use too much water.', correct: false }
          ],
          feedback: 'Matching 24/7 data center demand with intermittent renewables is a major engineering challenge.'
        },
        {
          text: 'What does "PUE" stand for in data centers?',
          options: [
            { text: 'Power Usage Effectiveness', correct: true },
            { text: 'Public Utility Extension', correct: false },
            { text: 'Personal User Equipment', correct: false }
          ],
          feedback: 'PUE measures how efficiently a data center uses power, with lower being better.'
        },
        {
          text: 'What is "intermittency" in renewable energy?',
          options: [
            { text: 'The consistent power supply', correct: false },
            { text: 'Energy sources not available at all times', correct: true },
            { text: 'A type of solar panel', correct: false }
          ],
          feedback: 'Intermittency means solar and wind do not produce power continuously.'
        },
        {
          text: 'What is "baseload" in energy?',
          options: [
            { text: 'Power used at the bottom of a hill', correct: false },
            { text: 'The minimum power delivered at any time', correct: true },
            { text: 'The cheapest form of energy', correct: false }
          ],
          feedback: 'Baseload is the minimum amount of power needed to keep the grid running at all times.'
        },
        {
          text: 'Why are tech companies building data centers near geothermal sources?',
          options: [
            { text: 'For tourism', correct: false },
            { text: 'To get 24/7 clean power from earth heat', correct: true },
            { text: 'To cool the servers', correct: false }
          ],
          feedback: 'Geothermal energy provides consistent, carbon-free power regardless of weather.'
        },
        {
          text: 'What is "energy storage" in renewable systems?',
          options: [
            { text: 'Storing electricity for later use', correct: true },
            { text: 'Saving money on energy bills', correct: false },
            { text: 'A type of power plant', correct: false }
          ],
          feedback: 'Batteries and other storage technologies store excess renewable energy for when it is needed.'
        },
        {
          text: 'Why is nuclear energy being considered for data centers?',
          options: [
            { text: 'It is the cheapest option', correct: false },
            { text: 'It provides carbon-free baseload power', correct: true },
            { text: 'It uses solar panels', correct: false }
          ],
          feedback: 'Nuclear provides consistent, low-carbon power that can run 24/7 without weather dependence.'
        }
      ]
    }
  },
  'digital-accessibility': {
    id: 'digital-accessibility',
    title: 'Mission 14: Access for All',
    badgeName: 'Inclusion Icon',
    icon: 'UserCheck',
    badgeIcon: 'Heart',
    description: 'Learn why making the digital world accessible to everyone is a key part of sustainability.',
    knowledge: {
      title: 'Inclusive Digital Spaces',
      pages: [
        { text: "Digital sustainability isn't just about carbon; it's about people too." },
        { text: "Accessibility means ensuring everyone can use digital products, regardless of ability." },
        { text: "Over 1 billion people globally live with some form of disability." },
        { text: "Screen readers help visually impaired users by reading text and image descriptions aloud." },
        { text: "High contrast and clear typography help users with low vision or color blindness." },
        { text: "Keyboard navigation is essential for those who cannot use a mouse." },
        { text: "Captions and transcripts make video and audio content accessible to the deaf or hard of hearing." },
        { text: "Simple, clear language helps users with cognitive or learning disabilities." },
        { text: "An accessible web is a more efficient web—it's easier for everyone to navigate." },
        { text: "Inclusion is a fundamental right in our increasingly digital society." }
      ]
    },
    learn: {
      title: 'Accessibility Terms',
      cards: [
        { front: 'Alt Text', back: 'Descriptions of images for screen reader users.' },
        { front: 'Screen Reader', back: 'Software that reads digital text aloud for visually impaired users.' },
        { front: 'Contrast Ratio', back: 'The difference in brightness between text and its background.' },
        { front: 'Keyboard Nav', back: 'The ability to use a website using only a keyboard.' },
        { front: 'A11y', back: 'A common abbreviation for "Accessibility" (11 letters between A and Y).' },
        { front: 'ARIA', back: 'Accessible Rich Internet Applications - a set of attributes for accessibility.' },
        { front: 'Caption', back: 'Text displayed on screen describing audio content.' },
        { front: 'Transcript', back: 'A text version of audio or video content.' },
        { front: 'Focus Ring', back: 'A visual indicator showing which element is keyboard-focused.' },
        { front: 'Skip Link', back: 'A navigation link allowing users to bypass repeated content.' },
        { front: 'Semantic HTML', back: 'Using HTML elements that convey meaning about structure.' },
        { front: 'Color Blindness', back: 'A condition affecting the ability to perceive certain colors.' }
      ]
    },
    challenge: {
      type: 'matching',
      title: 'A11y Match',
      intro: 'Match the accessibility feature to its purpose.',
      pairs: [
        { left: 'Alt Text', right: 'Describes images' },
        { left: 'Captions', right: 'For audio content' },
        { left: 'High Contrast', right: 'Improves readability' },
        { left: 'Keyboard Nav', right: 'For mouse-free use' },
        { left: 'Screen Reader', right: 'Reads text aloud' },
        { left: 'Skip Link', right: 'Bypasses repeated content' },
        { left: 'Semantic HTML', right: 'Conveys structure meaning' },
        { left: 'Focus Ring', right: 'Shows keyboard selection' }
      ]
    }
  },
  'privacy-security': {
    id: 'privacy-security',
    title: 'Mission 15: Digital Shield',
    badgeName: 'Privacy Pro',
    icon: 'ShieldCheck',
    badgeIcon: 'Lock',
    description: 'Protect your digital identity and understand the environmental cost of data breaches.',
    knowledge: {
      title: 'Privacy is Protection',
      pages: [
        { text: "Your data is valuable. Protecting it is a key part of digital citizenship." },
        { text: "Data breaches don't just hurt people; they waste massive amounts of energy to fix." },
        { text: "Encryption scrambles your data so only authorized people can read it." },
        { text: "Two-Factor Authentication (2FA) adds a second lock to your digital accounts." },
        { text: "Privacy-focused browsers and search engines reduce the amount of data collected about you." },
        { text: "The less data companies collect, the less energy they use to store and process it." },
        { text: "Data sovereignty is the idea that you should have control over your own digital info." },
        { text: "Strong, unique passwords are your first line of defense against cyber threats." },
        { text: "Phishing is a common way hackers try to steal your login details." },
        { text: "Being secure online reduces the overall 'noise' and waste in the digital ecosystem." }
      ]
    },
    learn: {
      title: 'Security Secrets',
      cards: [
        { front: 'Encryption', back: 'The process of converting information into a secret code.' },
        { front: '2FA', back: 'Two-Factor Authentication - requiring two forms of ID to log in.' },
        { front: 'Phishing', back: 'Fraudulent emails or sites designed to steal your data.' },
        { front: 'Password Manager', back: 'A tool that generates and stores strong, unique passwords.' },
        { front: 'Data Sovereignty', back: 'The right of an individual to control their own personal data.' },
        { front: 'VPN', back: 'Virtual Private Network - encrypts internet connection for privacy.' },
        { front: 'Firewall', back: 'A network security system monitoring incoming and outgoing traffic.' },
        { front: 'Malware', back: 'Malicious software designed to damage or gain unauthorized access.' },
        { front: 'Data Breach', back: 'An incident where confidential data is exposed unauthorizedly.' },
        { front: 'End-to-End Encryption', back: 'Encryption that only allows sender and recipient to read messages.' },
        { front: 'Privacy Policy', back: 'A document explaining how a company collects and uses data.' },
        { front: 'Cookie', back: 'Small data stored on a device to track browsing activity.' }
      ]
    },
    challenge: {
      type: 'sorting',
      title: 'Safe or Risky?',
      intro: 'Sort these digital habits based on their security impact.',
      items: [
        { id: '2fa', name: 'Using 2FA', type: 'safe', icon: '🔐' },
        { id: 'reuse', name: 'Reusing Passwords', type: 'risky', icon: '🔄' },
        { id: 'manager', name: 'Password Manager', type: 'safe', icon: '🗄️' },
        { id: 'public', name: 'Public Wi-Fi for Banking', type: 'risky', icon: '📶' },
        { id: 'update', name: 'Updating Software', type: 'safe', icon: '🆙' },
        { id: 'vpn', name: 'Using a VPN', type: 'safe', icon: '🛡️' },
        { id: 'phishing', name: 'Clicking Unknown Links', type: 'risky', icon: '🎣' },
        { id: 'encryption', name: 'End-to-End Encryption', type: 'safe', icon: '🔒' }
      ],
      bins: [
        { id: 'safe', name: 'Safe Habits', color: 'border-green-500 bg-green-500/20', accept: ['safe'] },
        { id: 'risky', name: 'Risky Habits', color: 'border-red-500 bg-red-500/20', accept: ['risky'] }
      ]
    }
  }
};

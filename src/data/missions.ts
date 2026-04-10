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
        { front: 'Email Impact', back: 'Unnecessary emails and large attachments contribute to server load and energy use.' }
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
        { front: 'Life Extension', back: 'The practice of using a device for as long as possible through repair and maintenance.' }
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
        { front: 'Water Footprint', back: 'The amount of water used to cool the servers running AI models.' }
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
        { front: 'Refurbished', back: 'A used product that has been restored to like-new condition.' }
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
        { left: 'Embodied Carbon', right: 'Manufacturing emissions' }
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
        { front: 'Rare Earth Minerals', back: 'A group of 17 chemical elements used in many high-tech devices.' }
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
        { id: 'sensor', name: 'Motion Sensor', type: 'low', icon: '📡' }
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
        { front: 'OLED', back: 'Organic Light Emitting Diode - a display technology where each pixel produces its own light.' }
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
        { front: 'Heat Re-use', back: 'Capturing waste heat from servers to use for other purposes.' }
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
        { left: 'Edge Computing', right: 'Local processing' }
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
        { front: 'Digital Sabbath', back: 'A designated period of time spent away from all digital devices.' }
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
        { front: 'Design for Disassembly', back: 'Designing products so they can be easily taken apart for repair or recycling.' }
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
        { id: 'reduce', name: 'Buy fewer gadgets', type: 'reduce', icon: '📉' }
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
        { front: 'Network Efficiency', back: 'Reducing the amount of data sent over the internet to save energy.' }
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
        { front: 'Digital Distribution', back: 'Downloading games instead of buying physical discs.' }
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
        { front: 'Decentralization', back: 'The transfer of control from a central entity to a distributed network.' }
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
        { front: 'Geothermal', back: 'Energy derived from the heat of the earth.' }
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
        { front: 'A11y', back: 'A common abbreviation for "Accessibility" (11 letters between A and Y).' }
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
        { left: 'Keyboard Nav', right: 'For mouse-free use' }
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
        { front: 'Data Sovereignty', back: 'The right of an individual to control their own personal data.' }
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
        { id: 'update', name: 'Updating Software', type: 'safe', icon: '🆙' }
      ],
      bins: [
        { id: 'safe', name: 'Safe Habits', color: 'border-green-500 bg-green-500/20', accept: ['safe'] },
        { id: 'risky', name: 'Risky Habits', color: 'border-red-500 bg-red-500/20', accept: ['risky'] }
      ]
    }
  }
};

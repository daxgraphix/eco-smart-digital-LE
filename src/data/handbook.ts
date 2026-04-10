import { HandbookEntry } from '../types';

export const HANDBOOK_DATA: Record<string, HandbookEntry> = {
  'digital-footprint': {
    title: 'Digital Carbon Footprint',
    icon: 'Globe',
    color: 'text-green-400',
    content: [
      "<strong>The Invisible Cost:</strong> Every online action uses electricity in data centers.",
      "<strong>Energy Hogs:</strong> 4K streaming and cloud gaming are the biggest consumers.",
      "<strong>How to Reduce:</strong> Use SD, download for offline use, and clean your inbox."
    ]
  },
  'e-waste': {
    title: 'E-Waste Explained',
    icon: 'Smartphone',
    color: 'text-orange-400',
    content: [
      "<strong>Toxic Trash:</strong> Electronics contain lead and mercury.",
      "<strong>Valuable Metals:</strong> They also contain gold and copper that should be recycled.",
      "<strong>Action:</strong> Never throw in trash; use certified e-waste centers."
    ]
  },
  'ai-sustainability': {
    title: 'AI & The Environment',
    icon: 'Cpu',
    color: 'text-purple-400',
    content: [
      "<strong>Compute Power:</strong> Training large models takes as much energy as hundreds of homes use in a year.",
      "<strong>Water Usage:</strong> Data centers use millions of gallons of water for cooling.",
      "<strong>Responsible AI:</strong> Use AI purposefully, not for every trivial task."
    ]
  },
  'green-hardware': {
    title: 'Sustainable Hardware',
    icon: 'Wrench',
    color: 'text-blue-400',
    content: [
      "<strong>Repairability:</strong> Choose devices that are easy to open and fix.",
      "<strong>Embodied Carbon:</strong> Most of a device's carbon footprint comes from making it, not using it.",
      "<strong>Longevity:</strong> Keeping a device for one extra year makes a huge difference."
    ]
  },
  'iot-impact': {
    title: 'The IoT Network',
    icon: 'Wifi',
    color: 'text-indigo-400',
    content: [
      "<strong>Standby Power:</strong> Connected devices are always 'on' and drawing power. This is often called 'Vampire Power'.",
      "<strong>Cumulative Effect:</strong> Billions of small devices add up to massive grid demand. A single smart bulb is tiny, but 30 billion are not.",
      "<strong>Smart Choice:</strong> Only connect devices that truly benefit from being online. Ask: 'Does my toaster really need Wi-Fi?'",
      "<strong>Actionable Tip:</strong> Use smart power strips to completely cut power to devices when they aren't in use."
    ]
  },
  'green-web': {
    title: 'Green Web Design',
    icon: 'Layout',
    color: 'text-teal-400',
    content: [
      "<strong>Performance is Sustainability:</strong> A faster website uses less energy. Every kilobyte saved reduces data transfer energy.",
      "<strong>Optimized Assets:</strong> Using WebP images and minifying code can reduce a site's footprint by over 50%.",
      "<strong>Dark Mode:</strong> On OLED screens, dark pixels are literally 'off', saving significant battery and energy.",
      "<strong>Actionable Tip:</strong> Use tools like 'Website Carbon Calculator' to check the footprint of your favorite sites."
    ]
  },
  'data-centers': {
    title: 'The Modern Data Center',
    icon: 'Server',
    color: 'text-sky-400',
    content: [
      "<strong>PUE (Power Usage Effectiveness):</strong> A metric for data center efficiency. A score of 1.0 is perfect efficiency.",
      "<strong>Natural Cooling:</strong> Building data centers in the Arctic or underwater uses the environment to cool servers for free.",
      "<strong>Heat Re-use:</strong> Some data centers pipe their excess heat into local homes or greenhouses instead of wasting it.",
      "<strong>Actionable Tip:</strong> Support companies that have public commitments to 24/7 carbon-free energy for their data centers."
    ]
  },
  'digital-minimalism': {
    title: 'Digital Minimalism',
    icon: 'Minimize',
    color: 'text-rose-400',
    content: [
      "<strong>Intentional Tech:</strong> Use technology as a tool for specific tasks, not as a default for boredom.",
      "<strong>The Cloud Clean-up:</strong> Deleting 1000 unneeded emails can save the equivalent energy of driving a car for 1km.",
      "<strong>Notification Audit:</strong> Turn off all but the most essential notifications to reduce background data and mental clutter.",
      "<strong>Actionable Tip:</strong> Set a weekly 'Digital Sabbath'—one day where you stay completely offline to reset."
    ]
  },
  'circular-economy': {
    title: 'The Circular Economy',
    icon: 'RefreshCw',
    color: 'text-orange-400',
    content: [
      "<strong>Linear vs. Circular:</strong> A 'linear' economy is Take -> Make -> Waste. A 'circular' economy is Reduce -> Reuse -> Repair -> Recycle.",
      "<strong>The 5 Rs:</strong> Refuse (don't buy), Reduce (buy less), Reuse (use again), Repurpose (use for something else), Recycle (break down and remake).",
      "<strong>Refurbished Tech:</strong> Buying a refurbished laptop saves about 190kg of CO2 emissions compared to buying a new one.",
      "<strong>Actionable Tip:</strong> Before buying something new, check if you can find it secondhand or if you can repair what you already have."
    ]
  },
  'green-coding': {
    title: 'Green Software Engineering',
    icon: 'Code',
    color: 'text-green-500',
    content: [
      "<strong>Carbon Intensity:</strong> The amount of carbon emitted per kilowatt-hour of electricity. It changes based on the time of day and location.",
      "<strong>Carbon-Awareness:</strong> Building software that does more when the sun is shining or the wind is blowing, and less when the grid is 'dirty'.",
      "<strong>Efficient Algorithms:</strong> A more efficient search algorithm doesn't just save time; it saves the electricity used by the CPU.",
      "<strong>Actionable Tip:</strong> If you're a developer, use tools like 'Cloud Carbon Footprint' to measure the impact of your cloud infrastructure."
    ]
  },
  'cloud-gaming': {
    title: 'Sustainable Gaming',
    icon: 'Gamepad2',
    color: 'text-pink-400',
    content: [
      "<strong>Local vs. Cloud:</strong> Cloud gaming can use significantly more energy than local gaming due to constant high-bandwidth video streaming.",
      "<strong>Download Once:</strong> Downloading a game once is almost always more efficient than streaming it multiple times.",
      "<strong>Hardware Lifespan:</strong> Consoles and gaming PCs have high embodied carbon. Keeping them for 5-7 years instead of 2-3 is a major win.",
      "<strong>Actionable Tip:</strong> Use 'Energy Saving' modes on your console to reduce standby power draw by up to 90%."
    ]
  },
  'blockchain-impact': {
    title: 'Blockchain & Crypto',
    icon: 'Link',
    color: 'text-indigo-400',
    content: [
      "<strong>Consensus Mechanisms:</strong> 'Proof of Work' (PoW) is energy-intensive; 'Proof of Stake' (PoS) is energy-efficient.",
      "<strong>The Ethereum Merge:</strong> Ethereum's switch to PoS reduced its energy consumption by 99.95%—a historic shift.",
      "<strong>Mining Waste:</strong> Specialized mining hardware (ASICs) often becomes obsolete quickly, contributing to the e-waste problem.",
      "<strong>Actionable Tip:</strong> If you use blockchain technology, prioritize networks that use Proof of Stake or other low-energy consensus models."
    ]
  },
  'renewable-energy': {
    title: 'Renewable Energy for Tech',
    icon: 'Sun',
    color: 'text-yellow-400',
    content: [
      "<strong>Solar & Wind:</strong> The primary sources of clean energy for data centers.",
      "<strong>Power Purchase Agreements (PPAs):</strong> How big tech companies fund new renewable energy projects.",
      "<strong>Intermittency:</strong> The challenge of matching energy supply with 24/7 data center demand.",
      "<strong>Actionable Tip:</strong> Look for 'Green Power' options from your local utility provider to power your home office."
    ]
  },
  'digital-accessibility': {
    title: 'Digital Accessibility',
    icon: 'UserCheck',
    color: 'text-pink-400',
    content: [
      "<strong>Inclusive Design:</strong> Making digital products usable by everyone, including people with disabilities.",
      "<strong>Screen Readers:</strong> Ensuring websites are structured so they can be read aloud accurately.",
      "<strong>Contrast & Color:</strong> Using colors that are distinguishable for those with color blindness.",
      "<strong>Actionable Tip:</strong> Use alt text for all images you post online to help visually impaired users understand the content."
    ]
  },
  'privacy-security': {
    title: 'Privacy & Security',
    icon: 'ShieldCheck',
    color: 'text-blue-500',
    content: [
      "<strong>Data Sovereignty:</strong> Understanding where your data is stored and who has access to it.",
      "<strong>Encryption:</strong> Protecting your data from unauthorized access during transmission and at rest.",
      "<strong>Two-Factor Authentication (2FA):</strong> Adding an extra layer of security to your digital identity.",
      "<strong>Actionable Tip:</strong> Use a password manager to generate and store unique, strong passwords for every account."
    ]
  }
};

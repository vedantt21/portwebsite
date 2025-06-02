// =======================
// Typewriter Effect
// =======================
const subtitle = document.getElementById('subtitle');
const roles = [
  'Aerospace Engineering + Computer Science',
  'CFD & Simulation Enthusiast',
  'Rocket Builder. Coder. Learner.',
  'Passionate about high-speed flow',
  'Designing the future, one launch at a time'
];

let roleIndex = 0;
let charIndex = 0;

function typeWriter() {
  if (!subtitle) return;

  if (charIndex < roles[roleIndex].length) {
    subtitle.textContent += roles[roleIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeWriter, 70);
  } else {
    setTimeout(() => {
      subtitle.textContent = '';
      charIndex = 0;
      roleIndex = (roleIndex + 1) % roles.length;
      typeWriter();
    }, 2000);
  }
}

if (subtitle) {
  typeWriter();
}

// =======================
// Fade-In on Scroll
// =======================
const fadeEls = document.querySelectorAll('.fade-in');

const appearOnScroll = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      appearOnScroll.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.3,
  rootMargin: "0px 0px -50px 0px"
});

fadeEls.forEach(el => appearOnScroll.observe(el));

// =======================
// Timeline Content System
// =======================
const content = {
  joined: {
  title: "Project Rudra",
  text: `
   
    In September 2023, I joined the UNSW Rocketry team — my first step into the world of high-powered rocketry. It was an exciting and eye-opening experience that introduced me to how rockets are designed, simulated, and flown.<br><br>
    
    This was the <strong>first rocket I had ever worked on</strong>. I spent time learning from more experienced team members who explained core concepts like stability calibers, center of gravity, and thrust curves. I also learned to use simulation tools like <strong>OpenRocket</strong>, which allowed me to visualize rocket flight and understand how different parameters affect performance.<br><br>
    
    It was amazing to see how all the parts of a rocket — from fins and nose cones to motor selection — come together in both CAD and simulation. Even though I wasn’t designing independently yet, I was absorbing as much as I could and building a strong foundation.<br><br>
    
    Below is the OpenRocket model I learned to work with, along with a simulation plot showing the velocity and stability profile during flight:<br><br>
    
    <div class="timeline-images">
      <img src="lprork1.png" alt="OpenRocket model of LPR rocket" class="timeline-img-small"> <br>
      <img src="lprork2.png" alt="Velocity and stability plots from OpenRocket" class="timeline-img-small">
    </div>
  `},
  machining: {
  title: "Machining Course Completed",
  text: `
    Over the past four weeks, I completed a Statement of General Machining at TAFE Ultimo alongside 14 other students from various Student-Led Projects at UNSW. During this time, we had the opportunity to learn practical manual machining skills, gaining over 30 hours of hands-on experience with manual machines such as the lathe and mill.<br><br>

    I am immensely grateful to UNSW Engineering and the James N. Kirby Makerspace for offering this opportunity, as it has significantly enhanced my understanding and appreciation of the practical aspects of engineering design.<br><br>

    Learning under Parviz Raminzad was an incredible experience. His extensive experience and deep knowledge in machining were evident in every lesson he taught. It was great to see how he catered to people with varying levels of experience — managing those that were inexperienced while also making the course worthwhile for those with prior machining knowledge.<br><br>

    Ultimately, I believe that this training has made me a better engineer overall by providing valuable insight into making designs more machinable. It was eye-opening to see how some designs are impractical, highlighting the importance of creating precise and feasible parts. I now hope to apply this knowledge to CNC manufacturing and further expand my understanding of precision engineering.<br><br>

    It's fascinating to see how student-led projects can enhance your theoretical knowledge by providing a platform to explore practical problems and real-world constraints. Being part of the UNSW Rocketry Team has been one of the most rewarding experiences of my university journey, and I’m excited to keep learning and building within the manufacturing domain.<br><br>

    <div class="timeline-images-inline">
      <img src="machining.jpg" alt="Manual Machining at TAFE Ultimo" class="timeline-img-small">
    </div>
  `
},

  mpr: {
  title: "Project Kesari",
  text: `
    The first step in preparing for my L1 rocket was completing my MPR (Mid Power Rocket) project. I started by designing a new rocket in OpenRocket — different from the bootcamp version. During this, I learned that the original design and motor choice exceeded the Whalan ceiling limit, so I made key changes.<br><br>

    I opted for a smaller <strong>E20 Aerotech motor</strong> to bring the altitude down. This way, teammates with prebuilt MPRs and 29 mm motor tubes could still fly theirs with larger G80s while I stayed within safe flight limits.<br><br>

    When building, I initially placed the parachute cord through the top of the fin jig — but I received valuable feedback that this posed a risk of the cord being burned by the ejection charge. I adjusted by routing the cord through a hole in the upper bulkhead, which solved the burn issue but meant the fin jig was now taking on both thrust and recovery forces. <em>A key takeaway for future builds.</em><br><br>

    I also made a common mistake: epoxying the fins to the outside of the airframe rather than integrating the centering rings internally. This caused all thrust force to be passed to the fin jig instead of properly distributing it to the fuselage. While it held, it’s definitely not best practice — and I’ll make sure to epoxy from the inside on my L1.<br><br>

    Another difference I noticed between LPR (Low Power) and MPR/L1 motors is motor retention. LPR motors don’t typically eject because the ejection charge is small — but L1 motors need proper retention or they can be forced out during flight. I'll need a secure motor retainer going forward.<br><br>

    These experiences gave me a better understanding of real-world rocket construction, force transfer, and structural integrity. Each mistake was a learning opportunity that’s shaping how I’ll approach my L1 rocket.<br><br>

    <div class="timeline-images-inline">
      <img src="mprork1.png" alt="MPR Rocket Assembly" class="timeline-img-small">
      <img src="mprork2.png" alt="MPR Rocket Assembly" class="timeline-img-small">
    </div>
  `
},

  carbon: {
  title: "Team Project Zenith (10,000 ft)",
  text: `
    As part of the UNSW Rocketry Team's Zenith project, I led the development of the <strong>payload retention bulkheads</strong>, focusing on structural performance under high dynamic loads. The design involved integrating <strong>threaded rod pass-throughs</strong> for securing the payload module while minimizing structural mass. To optimize the geometry, I conducted <strong>Finite Element Analysis (FEA)</strong> to evaluate stress concentrations and deformation under shock and axial loads. This allowed us to reduce material thickness without compromising safety margins. We selected <strong>aluminium alloy</strong> for its ideal trade-off between weight and strength.<br><br>

    In parallel, I contributed to the <strong>carbon composite fabrication</strong> of the Zenith rocket at McConaghy Boats — a leading composite manufacturing firm partnered with our team. The entire airframe was constructed from high-performance carbon fiber, and I was directly involved in each stage of the process. I learned how to <strong>handle epoxy resins, prepare female moulds</strong>, and perform <strong>wet lay-up of carbon plies</strong> over complex geometries. I gained hands-on experience with <strong>vacuum bagging</strong>, ensuring uniform compaction and proper resin distribution.<br><br>

    Working at McConaghy’s facility demanded early starts — we arrived by 8 a.m. after traveling from Sydney at 5 a.m. to make full use of the day. The exposure to professional-grade composite tooling, cleanroom procedures, and industrial-quality materials significantly elevated my understanding of <strong>advanced manufacturing techniques</strong> and gave me direct insight into how precision composite structures are built for flight-critical applications.<br><br>

    This project helped me connect structural design and manufacturing — validating simulations through real-world fabrication and learning the constraints that drive aerospace hardware design from concept to launch.
    
   
  `
  },
  
  l1: {
    title: "Project Kesari",
    text: `
    <div class="timeline-images-inline">
      <img src="l1table.png" alt="CAD model of L1 rocket" class="timeline-img-small">
    </div>
    This table above showcases the mistakes I made while building my MPR and how I used that to create a plan to correct these when constructing my L1 model.

    Building on my experience from the MPR project, I approached my L1 rocket with a focus on resolving previous mistakes and applying better engineering practices.<br><br>

    One of the first improvements was in <strong>parachute cord routing</strong>. During the MPR build, the cord was exposed to the ejection charge path — a burn risk. This time, I inserted a dedicated <strong>upper bulkhead with an i-bolt anchor</strong> to tie the shock cord securely. This design ensures thermal protection and isolates ejection gas pressure to aid separation, while maintaining structural reliability.<br><br>

    I also addressed the problem of <strong>thrust and recovery loads being transferred to the fin jig</strong>. For the L1, I inserted a lower bulkhead to decouple these forces: the fin jig only handles thrust loads, while a dedicated bulkhead manages parachute drag — reducing unnecessary stress on internal components.<br><br>

    Learning from my earlier error, I made sure to <strong>epoxy the centering rings directly to the inside of the body tube</strong>. This allows thrust loads to be distributed properly through the structure. I also <strong>double-stacked the aft centering ring</strong> to act as a reinforced thrust plate, maximizing axial load capacity.<br><br>

    For <strong>motor retention</strong>, I implemented a method developed by another team member (Erik), ensuring the motor casing is securely held in place during powered flight.<br><br>

    The team also wanted to test a new <strong>flight computer</strong> on board, so I designed and fabricated a custom <strong>mounting jig</strong> to secure the electronics inside the payload section. This fixture provided structural support while keeping the flight computer isolated from shock loads and free from potential interference during flight events.<br><br>

    I developed a complete <strong>CAD model</strong> of the rocket and tracked component masses meticulously throughout the build. As each element was manufactured, I measured its weight and updated the <strong>OpenRocket simulation</strong> to reflect the current center of gravity and predicted apogee, allowing for accurate performance predictions.<br><br>

    Before final assembly, I created and followed a <strong>detailed manufacturing checklist</strong> to verify structural integrity, mass properties, and flight-readiness. This included checks for:<br>
    - Nose cone retention and separation margin<br>
    - Shock cord length and routing<br>
    - Parachute diameter and secure attachment<br>
    - Internal epoxy bonding of centering rings and fins<br>
    - Motor fit, retention system, and thrust transfer<br>
    - Full-body carbon wrapping and final spray painting<br><br>

    Each of these steps reinforced the importance of integrating design, simulation, and physical construction — and brought me closer to building flight-ready rockets with the precision required
    . The images below showcase the meticulous design process I completed while working on my L1 certification.<br><br>

    <div class="timeline-images-inline">
  <img src="l1model.png" alt="L1 CAD Model" class="timeline-img-small"><br><br>
  <img src="l1finjig.png" alt="Fin Jig Assembly" class="timeline-img-small"><br><br>
  <img src="l1ork1.png" alt="OpenRocket Simulation 1" class="timeline-img-small"><br><br>
  <img src="l1ork2.png" alt="OpenRocket Simulation 2" class="timeline-img-small">
  </div>  

    `    
  },


  l2: {
    title: "Ongoing: Project Garuda",
    text: "Currently designing a complex high-powered rocket for L2 certification with added telemetry and custom propulsion features."
  }
};

function showContent(key) {
  const display = document.getElementById('timeline-display');
  if (!display || !content[key]) return;

  // Update content
  display.innerHTML = `
    <h1>${content[key].title}</h1>
    <p>${content[key].text}</p>
  `;

  // Update active class
  document.querySelectorAll('.timeline-entry').forEach(entry =>
    entry.classList.remove('active')
  );
  const activeEntry = document.querySelector(`.timeline-entry[data-key="${key}"]`);
  if (activeEntry) activeEntry.classList.add('active');
}

// =======================
// Initialization
// =======================
window.addEventListener('DOMContentLoaded', () => {
  // Attach click events to timeline entries
  document.querySelectorAll('.timeline-entry').forEach(entry => {
    const key = entry.getAttribute('data-key');
    entry.addEventListener('click', () => showContent(key));
  });

  // Show default content
  showContent('joined');
});

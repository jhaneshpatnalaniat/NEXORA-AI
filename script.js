/* NEXORA AI — interactive project script */
const detailContent = {
  write:{type:"PRODUCT CONCEPT / NX-01",title:"Nexora Write",lead:"An imagined writing companion that helps turn early thoughts into structured, readable communication.",overview:"Nexora Write represents how language models could assist with drafting, rewriting and organising ideas. A user remains the author: the tool is a starting point for expression, not a replacement for judgement or fact-checking.",points:["Draft outlines from a topic or prompt","Adjust tone for formal, friendly or concise writing","Summarise long notes into key points","Suggest clearer wording and structure"],uses:"Students could organise revision notes, teams could prepare first drafts, and individuals could improve everyday communication.",related:"Natural Language Processing · Generative AI · Nexora Chat",note:"AI-generated text can contain errors or unsupported claims. Important information should always be checked by a person."},
  vision:{type:"PRODUCT CONCEPT / NX-02",title:"Nexora Vision",lead:"A creative image-generation concept that translates written ideas into visual directions.",overview:"Nexora Vision illustrates text-to-image generation: a model learns visual patterns from training data and uses a prompt to create a new image. It is imagined as a tool for brainstorming and visual exploration.",points:["Convert descriptive prompts into visual concepts","Explore different styles and compositions","Create mood-board directions for a project","Iterate on an idea with revised prompts"],uses:"Potential users include designers, educators and creators who need visual inspiration before producing a final asset.",related:"Generative AI · Deep Learning · Computer Vision",note:"Generated images may contain inaccuracies, bias or resemblance to existing work. Review outputs and respect creators' rights."},
  voice:{type:"PRODUCT CONCEPT / NX-03",title:"Nexora Voice",lead:"An exploration of speech technology that could make digital interactions more natural and accessible.",overview:"Nexora Voice imagines a system combining speech recognition and speech synthesis. It could convert spoken language into text, or create spoken output from written content.",points:["Speech-to-text for voice notes","Text-to-speech for reading content aloud","Voice interaction for hands-free experiences","Accessibility support for different needs"],uses:"Possible settings include language learning, accessible reading, hands-free interfaces and audio content creation.",related:"Natural Language Processing · Deep Learning · Nexora Chat",note:"Voice systems can mishear accents or background speech. Consent and privacy are especially important when handling recorded audio."},
  code:{type:"PRODUCT CONCEPT / NX-04",title:"Nexora Code",lead:"A coding companion concept focused on explaining programming logic and supporting software learning.",overview:"Nexora Code represents an AI assistant that could explain code, suggest debugging approaches and help learners understand programming concepts step by step.",points:["Explain code in beginner-friendly language","Suggest possible causes of an error","Generate illustrative code examples","Help plan a solution before implementation"],uses:"Students could use it to understand loops, functions and algorithms; developers could use it as a brainstorming aid.",related:"Machine Learning · Generative AI · Nexora Analytics",note:"AI code may be incorrect, insecure or inefficient. Test, understand and review code before using it."},
  analytics:{type:"PRODUCT CONCEPT / NX-05",title:"Nexora Analytics",lead:"An imagined data assistant that helps people explore datasets and communicate useful observations.",overview:"Nexora Analytics illustrates how machine learning and data visualisation can work together. It could help users ask questions about data, spot trends and explain findings in plain language.",points:["Summarise a dataset's key characteristics","Highlight patterns and unusual values","Suggest charts suited to a question","Turn analysis into a readable insight summary"],uses:"Potential applications include student projects, business reporting, research exploration and operational planning.",related:"Machine Learning · Neural Networks · Data visualisation",note:"Patterns do not automatically prove cause and effect. Data quality, context and human interpretation matter."},
  chat:{type:"PRODUCT CONCEPT / NX-06",title:"Nexora Chat",lead:"A conversational assistant concept for making information discovery feel approachable and interactive.",overview:"Nexora Chat imagines a language-based interface that responds to questions, follows conversational context and helps people explore topics in their own words.",points:["Answer questions in conversational language","Break complex topics into smaller explanations","Help brainstorm and organise ideas","Support multilingual information access"],uses:"It could support learning, customer-service workflows, internal knowledge discovery and everyday information tasks.",related:"Natural Language Processing · Generative AI · Nexora Write",note:"A fluent answer is not necessarily a correct answer. Verify high-impact information using reliable sources."},
  "feature-personal":{type:"CAPABILITY / 01",title:"Adaptive assistance",lead:"A helpful interface should respond to the task a person is trying to complete.",overview:"Adaptive assistance means tailoring the form of help to the user's context. For example, a learner may need a simple explanation while an experienced user may prefer a concise summary.",points:["Offer different levels of explanation","Adapt suggestions to the current task","Keep user control over the final result","Make settings and limitations understandable"],uses:"This principle could improve tutoring tools, writing support and workplace assistants.",related:"Nexora Write · Nexora Chat · Machine Learning",note:"Personalisation should be transparent and should respect user privacy and choice."},
  "feature-language":{type:"CAPABILITY / 02",title:"Natural interaction",lead:"People should be able to explore technology using language that feels familiar.",overview:"Natural interaction uses language processing to interpret questions and produce useful responses. It can make complex systems easier to approach, especially for new users.",points:["Understand everyday questions","Support follow-up questions","Present answers in clear language","Consider multilingual access"],uses:"Conversational interfaces can support learning, information search and customer-service experiences.",related:"Natural Language Processing · Nexora Chat · Nexora Voice",note:"Language models can misunderstand intent. Important decisions need human review."},
  "feature-creative":{type:"CAPABILITY / 03",title:"Creative generation",lead:"Generative systems can help people explore possibilities and develop a first draft.",overview:"Generative AI learns patterns from examples and can produce new text, images, audio or other outputs in response to instructions.",points:["Generate early-stage concepts","Explore alternative creative directions","Support iterative prompt-based workflows","Help users move from blank page to first draft"],uses:"Creative generation may support design exploration, learning materials, writing and media production.",related:"Generative AI · Nexora Vision · Nexora Write",note:"Generated content should be reviewed for quality, originality, bias and appropriate use."},
  "feature-insight":{type:"CAPABILITY / 04",title:"Insight discovery",lead:"AI can help people navigate large amounts of information and ask better questions.",overview:"Insight discovery combines data analysis, pattern recognition and clear visual communication. The goal is to support understanding rather than simply produce more numbers.",points:["Identify trends and outliers","Organise information into themes","Suggest useful follow-up questions","Explain findings with charts and summaries"],uses:"Researchers, students and organisations may use these approaches to explore information more efficiently.",related:"Nexora Analytics · Machine Learning · Neural Networks",note:"AI findings depend on the data and assumptions used. Always check context before acting."},
  "app-education":{type:"APPLICATION / 01",title:"AI in Education",lead:"Supporting learning with more accessible explanations, practice and feedback.",overview:"AI can help education by adapting learning materials, generating practice questions, supporting language learning and helping teachers organise resources. It should complement educators and student effort.",points:["Personalised practice at an appropriate level","Explanations of difficult concepts in simpler language","Language translation and accessibility support","Administrative assistance for educators"],uses:"Example: a student studying algebra could request a step-by-step explanation, then practise a similar problem independently.",related:"Nexora Write · Nexora Chat · Natural Language Processing",note:"AI should not replace teachers or independent learning. Students should verify answers and follow academic-integrity rules."},
  "app-healthcare":{type:"APPLICATION / 02",title:"AI in Healthcare",lead:"Helping health professionals work with information while keeping clinical judgement central.",overview:"Healthcare AI research includes medical-image analysis, clinical documentation support, patient scheduling and pattern detection in health data. These are high-stakes uses that require careful testing and qualified oversight.",points:["Assist specialists in reviewing medical images","Organise clinical notes and administrative tasks","Support research by analysing large datasets","Help manage scheduling and resource planning"],uses:"Example: an evaluated imaging tool may flag an area for a radiologist to review. The clinician remains responsible for diagnosis and care.",related:"Computer Vision · Machine Learning · Deep Learning",note:"AI is not a doctor and must not independently diagnose or prescribe. Healthcare systems require strong validation, privacy safeguards and professional oversight."},
  "app-business":{type:"APPLICATION / 03",title:"AI in Business",lead:"Helping organisations understand information and streamline repetitive workflows.",overview:"Businesses explore AI for customer-service assistance, document processing, demand forecasting, quality checks and summarising internal information.",points:["Assist with frequently asked customer questions","Summarise documents and meeting notes","Forecast demand using historical patterns","Support quality checks and workflow planning"],uses:"Example: a retail team could analyse past sales patterns to support stock planning, while staff make the final decisions.",related:"Nexora Analytics · Nexora Chat · Machine Learning",note:"Organisations should review outputs, protect customer data and monitor systems for errors or unfair outcomes."},
  "app-finance":{type:"APPLICATION / 04",title:"AI in Finance",lead:"Finding patterns in financial information and supporting careful operational review.",overview:"AI techniques can help financial organisations identify unusual transaction patterns, assess information and automate some routine document workflows.",points:["Flag unusual activity for human investigation","Support document classification","Analyse trends in market or business data","Assist with customer-service workflows"],uses:"Example: a monitoring system may flag a transaction that differs from a customer's usual pattern for a trained reviewer to examine.",related:"Machine Learning · Deep Learning · Nexora Analytics",note:"AI predictions are not guarantees or personal financial advice. Fairness, explainability, security and regulatory compliance are essential."},
  "app-entertainment":{type:"APPLICATION / 05",title:"AI in Entertainment",lead:"Creating more discoverable, accessible and imaginative media experiences.",overview:"Entertainment platforms use AI-related methods for content recommendations, captioning, editing assistance, visual effects and creative exploration.",points:["Recommend content based on stated preferences","Generate captions and subtitles","Support editing and production workflows","Help creators explore visual or audio concepts"],uses:"Example: a streaming platform may rank titles a viewer could enjoy, while the viewer remains in control of what to watch.",related:"Generative AI · Computer Vision · Nexora Vision",note:"Recommendation systems can narrow what people see. Transparency, choice and respect for creators matter."},
  "app-transport":{type:"APPLICATION / 06",title:"AI in Transportation",lead:"Using data to support safer, more efficient movement of people and goods.",overview:"Transportation research explores traffic prediction, route optimisation, fleet maintenance and driver-assistance systems. Real-world deployment requires rigorous safety testing.",points:["Estimate traffic conditions from available data","Suggest efficient routes","Predict when fleet maintenance may be needed","Support monitoring and logistics planning"],uses:"Example: a delivery operator could compare route options using traffic and distance information, with a human dispatcher reviewing constraints.",related:"Machine Learning · Computer Vision · Nexora Analytics",note:"AI-assisted transport systems must be tested for safety and reliability. Human oversight remains important."},
  "tech-ml":{type:"TECHNOLOGY / 01",title:"Machine Learning",lead:"A way for computers to learn patterns from examples instead of relying only on hand-written rules.",overview:"In machine learning, a model is trained using data. It finds relationships in that data and uses what it learned to make predictions or group similar items. The quality of the result depends heavily on the data and task.",points:["Supervised learning uses labelled examples","Unsupervised learning looks for structure in data","Reinforcement learning learns through feedback","Models must be tested on data they have not seen"],uses:"Examples include spam filtering, product recommendations and predicting demand.",related:"Deep Learning · Neural Networks · Nexora Analytics",note:"A model can learn mistakes or bias from its training data. Testing and monitoring are essential."},
  "tech-dl":{type:"TECHNOLOGY / 02",title:"Deep Learning",lead:"A branch of machine learning that uses neural networks with many processing layers.",overview:"Deep learning models can learn complex patterns from large amounts of data. They are widely used in image recognition, speech systems and generative AI, but often need substantial data and computing resources.",points:["Uses networks with multiple layers","Can learn useful features from raw data","Often supports image, audio and language tasks","Requires careful training and evaluation"],uses:"Examples include speech recognition, image classification and some language models.",related:"Neural Networks · Computer Vision · Generative AI",note:"Deep learning systems can be difficult to interpret and may make confident mistakes."},
  "tech-nlp":{type:"TECHNOLOGY / 03",title:"Natural Language Processing",lead:"The field that helps computers work with human language — written or spoken.",overview:"Natural Language Processing (NLP) includes methods for analysing, interpreting and generating language. It helps computers identify meaning, extract information and respond to text or speech.",points:["Text classification and sentiment analysis","Translation and summarisation","Question answering and chat interfaces","Speech recognition and language generation"],uses:"Examples include translation tools, search, virtual assistants and document summarisation.",related:"Generative AI · Nexora Chat · Nexora Voice",note:"Language can be ambiguous and culturally nuanced. NLP systems may misunderstand context or produce inaccurate text."},
  "tech-cv":{type:"TECHNOLOGY / 04",title:"Computer Vision",lead:"A field of AI that helps computers interpret information in images and video.",overview:"Computer vision systems process visual data to identify objects, classify images, detect patterns or estimate movement. They learn from examples and need careful testing across different conditions.",points:["Image classification assigns labels to images","Object detection locates objects in a scene","Segmentation identifies regions or pixels","Video analysis studies changes over time"],uses:"Examples include quality inspection, accessibility descriptions and medical-image research.",related:"Deep Learning · Neural Networks · Nexora Vision",note:"Visual AI can misidentify objects or people. Privacy, consent and accuracy are critical."},
  "tech-gen":{type:"TECHNOLOGY / 05",title:"Generative AI",lead:"AI systems that create new content based on patterns learned during training.",overview:"Generative AI models can produce text, images, audio, code and other outputs. A prompt guides the model, but the result is generated from learned patterns rather than retrieved as a guaranteed fact.",points:["Large language models generate text and code","Image models create visuals from prompts","Audio models can generate or transform sound","Human review helps improve quality and safety"],uses:"Examples include drafting, concept art, tutoring explanations and creative prototyping.",related:"Deep Learning · NLP · Nexora Write · Nexora Vision",note:"Generated content may be inaccurate or biased. Consider copyright, attribution and responsible use."},
  "tech-nn":{type:"TECHNOLOGY / 06",title:"Neural Networks",lead:"Computational models made of connected units that learn to transform input into useful output.",overview:"A neural network contains layers of connected mathematical units. During training, it adjusts internal weights to reduce errors on examples. The name is inspired by the brain, but these systems are not human brains.",points:["Input layers receive information","Hidden layers transform patterns","Output layers produce predictions","Training adjusts weights using an optimisation process"],uses:"Neural networks are used in image recognition, speech processing, forecasting and generative systems.",related:"Machine Learning · Deep Learning · Computer Vision",note:"Neural networks need suitable data and evaluation. Their outputs should not be treated as automatically reliable."}
};

const overlay=document.getElementById('detailOverlay');
const detailBody=document.getElementById('detailBody');
const closeButtons=[document.getElementById('detailBack'),document.getElementById('detailClose')];
let lastFocused=null;

function openDetail(key){
  const item=detailContent[key];
  if(!item)return;
  lastFocused=document.activeElement;
  detailBody.innerHTML=`
    <span class="detail-kicker">${item.type}</span>
    <h2 id="detailTitle">${item.title}</h2>
    <p class="detail-lead">${item.lead}</p>
    <div class="detail-columns">
      <div><h3>Overview</h3><p>${item.overview}</p><h3>Where it could be used</h3><p>${item.uses}</p></div>
      <div><h3>Key points</h3><ul>${item.points.map(point=>`<li>${point}</li>`).join('')}</ul><h3>Related concepts</h3><p>${item.related}</p></div>
    </div>
    <div class="detail-pill-row"><span class="detail-pill">NEXORA AI</span><span class="detail-pill">EDUCATIONAL CONCEPT</span><span class="detail-pill">HUMAN-CENTRED DESIGN</span></div>
    <div class="detail-callout"><strong>Responsible use:</strong> ${item.note}</div>`;
  overlay.classList.add('open');
  overlay.setAttribute('aria-hidden','false');
  document.body.style.overflow='hidden';
  document.getElementById('detailClose').focus();
}
function closeDetail(){
  overlay.classList.remove('open');
  overlay.setAttribute('aria-hidden','true');
  document.body.style.overflow='';
  if(lastFocused)lastFocused.focus();
}
document.querySelectorAll('[data-detail]').forEach(card=>card.addEventListener('click',()=>openDetail(card.dataset.detail)));
closeButtons.forEach(button=>button.addEventListener('click',closeDetail));
overlay.addEventListener('click',event=>{if(event.target===overlay)closeDetail()});
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&overlay.classList.contains('open'))closeDetail()});

const menuToggle=document.getElementById('menuToggle');
const mainNav=document.getElementById('mainNav');
menuToggle.addEventListener('click',()=>{
  const opened=mainNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded',String(opened));
});
mainNav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{
  mainNav.classList.remove('open');menuToggle.setAttribute('aria-expanded','false');
}));

const searchInput=document.getElementById('productSearch');
const filters=document.getElementById('productFilters');
let activeFilter='all';
function filterProducts(){
  const query=searchInput.value.trim().toLowerCase();
  document.querySelectorAll('.product-card').forEach(card=>{
    const matchesFilter=activeFilter==='all'||card.dataset.category===activeFilter;
    const matchesText=card.innerText.toLowerCase().includes(query);
    card.hidden=!(matchesFilter&&matchesText);
  });
}
searchInput.addEventListener('input',filterProducts);
filters.querySelectorAll('button').forEach(button=>button.addEventListener('click',()=>{
  filters.querySelectorAll('button').forEach(item=>item.classList.remove('active'));
  button.classList.add('active');activeFilter=button.dataset.filter;filterProducts();
}));

const form=document.getElementById('contactForm');
const feedback=document.getElementById('formFeedback');
form.addEventListener('submit',event=>{
  event.preventDefault();
  if(!form.checkValidity()){
    feedback.textContent='Please complete every field with a valid name, email address and message.';
    feedback.className='form-feedback error';
    form.reportValidity();
    return;
  }
  const visitor=form.elements.name.value.trim();
  feedback.textContent=`Thank you, ${visitor}. Your demo message passed front-end validation. No data was sent or stored.`;
  feedback.className='form-feedback';
  form.reset();
});

const backTop=document.getElementById('backTop');
window.addEventListener('scroll',()=>{
  backTop.classList.toggle('visible',window.scrollY>500);
},{passive:true});
backTop.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));

const revealObserver=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){entry.target.classList.add('is-visible');revealObserver.unobserve(entry.target)}
  });
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(element=>revealObserver.observe(element));

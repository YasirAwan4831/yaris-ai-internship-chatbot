async function test() {
  const response = await fetch("https://generativelanguage.googleapis.com/v1beta/models?key=AIzaSyAFgFRtc0rmyWvDqYq_d2hhKfLaAN_eKus");
  const data = await response.json();
  const validModels = data.models.filter(m => m.supportedGenerationMethods && m.supportedGenerationMethods.includes("generateContent") && !m.name.includes("preview") && !m.name.includes("vision"));
  console.log(validModels.map(m => m.name));
}
test();

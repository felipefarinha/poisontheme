class Toxin {
  constructor(props) {
    this.name = props.name;
    this.origin = props.origin;
    this.discovered = props.discovered;
    this.effects = props.effects;
    this.antidote = props.antidote;
  }

  get summary() {
    return `${this.name} é uma toxina de origem ${this.origin}, descoberta em ${this.discovered},
    causando: ${this.effects.join(', ')}. Antídoto: ${this.antidote || 'desconhecido'}.`;
  }
}
// ... stay calm... if you can
const Caffeine = new Toxin({
  name: 'Cafeína',
  origin: 'Plantas como café, chá e cacau',
  discovered: 1819,
  effects: ['Melhora da atenção', 'Aumento da velocidade de digitação', 'Estímulo cognitivo', 'Redução da fadiga'],
  antidote: 'Hidratação e descanso (em caso de superdosagem)'
});

export const toxinInfo = Caffeine.summary

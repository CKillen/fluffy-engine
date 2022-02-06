import Phaser from 'phaser';

export default class Demo extends Phaser.Scene {
  constructor() {
    super('GameScene');
  }

  preload() {
    this.load.image('logo', 'assets/phaser3-logo.png');
  }

  create() {
    const logo = this.add.image(400, 70, 'logo');

    this.tweens.add({
      targets: logo,
      y: 350,
      duration: 1500,
      ease: 'Sine.inOut',
      yoyo: true,
      repeat: -1
    });

    const particles = this.add.particles('logo');

    particles.createEmitter({
      scale: { start: 1, end: 0 },
      follow: logo,
      alpha: { start: 1, end: 0, ease: 'Power1' }
    })
  }
}

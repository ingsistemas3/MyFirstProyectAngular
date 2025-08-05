import { Component, ElementRef, Input, signal, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

import WaveSurfer from 'wavesurfer.js';
import { ɵEmptyOutletComponent } from "@angular/router";

@Component({
  selector: 'app-wave-audio',
  standalone: true,
  imports: [CommonModule, ɵEmptyOutletComponent],
  templateUrl: './wave-audio.component.html',
  styleUrl: './wave-audio.component.css'
})
export class WaveAudioComponent {

  @Input({required: true}) audioUrl!: string;
  @ViewChild('waveAudioContainer') container!: ElementRef ;
  private ws!: WaveSurfer;
  isPlaying = signal(false);

  ngAfterViewInit() {
    this.ws = WaveSurfer.create({
      container: this.container.nativeElement,
      progressColor: '#3B8686',
      cursorColor: '#3B8686',
      backend: 'WebAudio',
      url: this.audioUrl,
      height: 128
    });
    this.ws.on('play', () => this.isPlaying.set(true));
    this.ws.on('pause', () => this.isPlaying.set(false));
  }
  playPause() {
    this.ws.isPlaying() ? this.ws.pause() : this.ws.play();
  }

 
}

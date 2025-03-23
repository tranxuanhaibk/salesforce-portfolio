import { LightningElement } from 'lwc';
import astronaut from '@salesforce/resourceUrl/astronaut';
import spaceship from '@salesforce/resourceUrl/spaceship';
import satellite from '@salesforce/resourceUrl/satellite';

export default class HeroSection extends LightningElement {
    astronaut_img = astronaut;
    spaceship_img = spaceship;
    satellite_img = satellite;
}
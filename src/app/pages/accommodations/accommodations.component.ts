import { Component, OnInit } from '@angular/core';
import { Room } from 'src/app/interfaces';

@Component({
	selector: 'app-accommodations',
	templateUrl: './accommodations.component.html',
	styleUrls: ['./accommodations.component.scss']
})
export class AccommodationsComponent implements OnInit {

	rooms: Room[] = [];

	constructor() { }

	ngOnInit() {
		this.rooms = [
			{
				title: 'Ocean View King',
				size: '450 square feet',
				features: ['One King bed', 'iPod docking station', 'Ocean views'],
				cost: 635.00,
				description: 'Ocean View Guest Room with luxurious king bed, features 4-fixture beautiful stone bathroom with separate tub and shower, pillow-top bed with goose-down pillows and luxurious linens. This room also features a 65-inch LED flatscreen television, two dual-line telephones with voicemail, in-room safe, available wireless internet, iron and ironing board, and private balcony or patio.',
				image: '../../../assets/images/ocean-view-king.jpg'
			},
			{
				title: 'Ocean View Double',
				size: '450 square feet',
				features: ['Two Double beds', 'iPod docking station', 'Ocean views'],
				cost: 635.00,
				description: 'Ocean View Guest Room with 2 luxurious double beds, features 4-fixture beautiful stone bathroom with separate tub and shower, pillow-top bed with goose-down pillows and luxurious linens. This room also features a 65-inch LED flatscreen television, two dual-line telephones with voicemail, in-room safe, available wireless internet, iron and ironing board, and private balcony or patio.',
				image: '../../../assets/images/ocean-view-double.jpg'
			},
			{
				title: 'Ocean Side King',
				size: '450 square feet',
				features: ['One King bed', 'iPod docking station', 'Expansive ocean views'],
				cost: 895.00,
				description: 'Overlooking the breaking waves of the Pacific Ocean, this Ocean Side room features a pillow-top king bed with goose-down pillows and luxurious linens, 4-fixture beautiful stone bathroom with separate tub and shower, a 65-inch LED flatscreen television, two dual-line telephones with voicemail, in-room safe, available wireless internet, iron and ironing board, and private balcony or patio.',
				image: '../../../assets/images/ocean-side-king.jpg'
			}
		]
	}

}

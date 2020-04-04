class Transporte {
	private velocidad: number;
	private formaDeMovilidad: string;

	constructor(velocidad: number, formaDeMovilidad: string) {
		this.velocidad = velocidad;
		this.formaDeMovilidad = formaDeMovilidad;
	}
	getVelocidad() {
		return this.velocidad;
	}
	setVelocidad(velocidad: number) {
		this.velocidad = velocidad;
	}
	getFormaDeMovilidad() {
		return this.formaDeMovilidad;
	}
	setFormaDeMovilidad(formaDeMovilidad: string) {
		this.formaDeMovilidad = formaDeMovilidad;
	}
}

const myTransporte: Transporte = new Transporte(20, "suelo");

class Auto extends Transporte {
	private cantidadDePuertas: number;

	constructor(
		velocidad: number,
		formaDeMovilidad: string,
		cantidadDePuertas: number
	) {
		super(velocidad, formaDeMovilidad);
		this.cantidadDePuertas = cantidadDePuertas;
	}
	getCantidadDePuertas() {
		this.cantidadDePuertas;
	}
	setCantidadDePuertas(cantidad: number) {
		this.cantidadDePuertas = cantidad;
	}
}

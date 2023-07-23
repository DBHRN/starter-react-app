import React from 'react';
import estilosSlider from './../styles/slider.css';

function Slider() {

    const imagenes = [
        './../assets/working_with_kids.jpg',
        './../assets/mom_and_daughter.jpg',
        './../assets/kids_playing_worm_toy.jpg'
    ];
	// Variables y Estados
	const [imagenActual, setImagenActual] = React.useState(0);
	const cantidad = imagenes?.length;

	// Return prematuro para evitar errores
	if (!Array.isArray(imagenes) || cantidad === 0) return;

	const siguienteImagen = () => {
		setImagenActual(imagenActual === cantidad - 1 ? 0 : imagenActual + 1);
	};

	const anteriorImagen = () => {
		setImagenActual(imagenActual === 0 ? cantidad - 1 : imagenActual - 1);
	};

	return (
		<div className={estilosSlider.container}>
			<button onClick={anteriorImagen}>←</button>
			{imagenes.map((imagen, index) => {
				return (
					<div key={index}
						className={
							imagenActual === index
								? `${estilosSlider.slide} ${estilosSlider.active}`
								: estilosSlider.slide
						}>
						{imagenActual === index && (
							<img key={index} src={imagen} alt="imagen" />
						)}
					</div>
				);
			})}
			<button onClick={siguienteImagen}>→</button>
		</div>
	);
}

export default Slider;
import React from 'react';
import "./Important.scss";
import Section from "../../components/Section/Section";


function Important() {
	return (
		<Section>
			<div className="important">
				<h1>Дополнительная информация</h1>
				<p>Указанная стоимость является ориентировочной, фактическая стоимость может немного отличаться от характера груза и от способа отправки. Конечную стоимость уточнять у наших специалистов.</p>
				<ul>
					Обращаем ваше внимание:
					<li>наличие дополнительной упаковки может повлиять на конечную стоимость перевозки груза</li>
					<li>если груз относится к списку отправлений, подлежащих обязательной жесткой упаковке, в
						соответствии с условиями договора он будет упакован независимо от того, заказана ли данная
						услуга в поручении экспедитору</li>
					<li>результаты расчетов, выполненных с помощью калькулятора «AIDADECK», являются предварительными.
						Окончательная стоимость определяется только после сдачи груза</li>
					<li>настоятельно рекомендуем нашим клиентам позаботиться о своевременном получении груза в пункте назначения</li>
				</ul>
			</div>
		</Section>
	);
}

export default Important;
function CountDuty(CarStatus,CarFuel,CarYear,CarMonth,CarVolume,CarPrice)
{
	dt = new Date();
	var CurrentYear = dt.getFullYear();
	var DutyPrice;
	var CarAge = parseFloat(((CurrentYear*12+parseInt(dt.getMonth())) - (CarYear*12+parseInt(CarMonth)))/12);
    if (CarStatus == 1)
	{
            if (CarAge < 3.0){
                if (CarPrice <= 8500){
                    DutyPrice = (CarPrice * 0.54 < CarVolume * 2.5) ? (CarVolume * 2.5) : (CarPrice * 0.54) ;
                    }
                else if(CarPrice > 8500 && CarPrice <= 16700){
                    DutyPrice = (CarPrice * 0.48 < CarVolume * 3.5) ? (CarVolume * 3.5) : (CarPrice * 0.48) ;
                    }
                else if(CarPrice > 16700 && CarPrice <= 42300){
                    DutyPrice = (CarPrice * 0.48 < CarVolume * 5.5) ? (CarVolume * 5.5) : (CarPrice * 0.48) ;
                    }
		else if(CarPrice > 42300 && CarPrice <= 84500){
                    DutyPrice = (CarPrice * 0.48 < CarVolume * 7.5) ? (CarVolume * 7.5) : (CarPrice * 0.48) ;
                    }
		else if(CarPrice > 84500 && CarPrice <= 169000){
                    DutyPrice = (CarPrice * 0.48 < CarVolume * 15) ? (CarVolume * 15) : (CarPrice * 0.48) ;
                    }
		else if(CarPrice > 169000){
                    DutyPrice = (CarPrice * 0.48 < CarVolume * 20) ? (CarVolume * 20) : (CarPrice * 0.48) ;
                    }
                }
            else if(CarAge >= 3.0 && CarAge < 5.0){
                if(CarVolume <= 1000){ DutyPrice = CarVolume * 1.5; }
                else if(CarVolume > 1000 && CarVolume <= 1500){ DutyPrice = CarVolume * 1.7; }
                else if(CarVolume > 1500 && CarVolume <= 1800){ DutyPrice = CarVolume * 2.5; }
                else if(CarVolume > 1800 && CarVolume <= 2300){ DutyPrice = CarVolume * 2.7; }
                else if(CarVolume > 2300 && CarVolume <= 3000){ DutyPrice = CarVolume * 3; }
                else if(CarVolume > 3000){ DutyPrice = CarVolume * 3.6; }
                }
            else if(CarAge >= 5.0){
                if(CarVolume <= 1000){ DutyPrice = CarVolume * 3; }
                else if(CarVolume > 1000 && CarVolume <= 1500){ DutyPrice = CarVolume * 3.2; }
                else if(CarVolume > 1500 && CarVolume <= 1800){ DutyPrice = CarVolume * 3.5; }
                else if(CarVolume > 1800 && CarVolume <= 2300){ DutyPrice = CarVolume * 4.8; }
                else if(CarVolume > 2300 && CarVolume <= 3000){ DutyPrice = CarVolume * 5; }
                else if(CarVolume > 3000){ DutyPrice = CarVolume * 5.7; }
                }
    }
        else if(CarStatus == 2 && CarFuel == 1){
            if (CarAge < 3.0){
                if(CarVolume <= 1000){ DutyPrice = (CarPrice * 0.3 < CarVolume * 1.2) ? (CarVolume * 1.2) : (CarPrice * 0.3) ; }
                else if(CarVolume > 1000 && CarVolume <= 1500){ DutyPrice = (CarPrice * 0.3 < CarVolume * 1.45) ? (CarVolume * 1.45) : (CarPrice * 0.3) ; }
                else if(CarVolume > 1500 && CarVolume <= 1800){ DutyPrice = (CarPrice * 0.3 < CarVolume * 1.5) ? (CarVolume * 1.5) : (CarPrice * 0.3) ; }
                else if(CarVolume > 1800 && CarVolume <= 2300){ DutyPrice = (CarPrice * 0.3 < CarVolume * 2.15) ? (CarVolume * 2.15) : (CarPrice * 0.3) ; }
                else if(CarVolume > 2300 && CarVolume <= 3000){ DutyPrice = (CarPrice * 0.3 < CarVolume * 2.15) ? (CarVolume * 2.15) : (CarPrice * 0.3) ; }
                else if(CarVolume > 3000){ DutyPrice = (CarPrice * 0.3 < CarVolume * 2.8) ? (CarVolume * 2.8) : (CarPrice * 0.3) ; }
                }
            else if(CarAge >= 3.0 && CarAge < 5.0){
                if(CarVolume <= 1000){ DutyPrice = (CarPrice * 0.35 < CarVolume * 1.2) ? (CarVolume * 1.2) : (CarPrice * 0.35) ; }
                else if(CarVolume > 1000 && CarVolume <= 1500){ DutyPrice = (CarPrice * 0.35 < CarVolume * 1.45) ? (CarVolume * 1.45) : (CarPrice * 0.35) ; }
                else if(CarVolume > 1500 && CarVolume <= 1800){ DutyPrice = (CarPrice * 0.35 < CarVolume * 1.5) ? (CarVolume * 1.5) : (CarPrice * 0.35) ; }
                else if(CarVolume > 1800 && CarVolume <= 2300){ DutyPrice = (CarPrice * 0.35 < CarVolume * 2.15) ? (CarVolume * 2.15) : (CarPrice * 0.35) ; }
                else if(CarVolume > 2300 && CarVolume <= 3000){ DutyPrice = (CarPrice * 0.35 < CarVolume * 2.15) ? (CarVolume * 2.15) : (CarPrice * 0.35) ; }
                else if(CarVolume > 3000){ DutyPrice = (CarPrice * 0.35 < CarVolume * 2.8) ? (CarVolume * 2.8) : (CarPrice * 0.35) ; }
                }
            else if(CarAge >= 5.0){
                if(CarVolume <= 1000){ DutyPrice = CarVolume * 2.5; }
                else if(CarVolume > 1000 && CarVolume <= 1500){ DutyPrice = CarVolume * 2.7; }
                else if(CarVolume > 1500 && CarVolume <= 1800){ DutyPrice = CarVolume * 2.9; }
                else if(CarVolume > 1800 && CarVolume <= 2300){ DutyPrice = CarVolume * 4.0; }
                else if(CarVolume > 2300 && CarVolume <= 3000){ DutyPrice = CarVolume * 4.0; }
                else if(CarVolume > 3000){ DutyPrice = CarVolume * 5.8; }
                }
            }
        else if(CarStatus == 2 && CarFuel == 2){
            if (CarAge < 3.0){
                if(CarVolume <= 1500){ DutyPrice = (CarPrice * 0.3 < CarVolume * 1.45) ? (CarVolume * 1.45) : (CarPrice * 0.3) ; }
                else if(CarVolume > 1500 && CarVolume <= 2500){ DutyPrice = (CarPrice * 0.3 < CarVolume * 1.9) ? (CarVolume * 1.9) : (CarPrice * 0.3) ; }
                else if(CarVolume > 2500){ DutyPrice = (CarPrice * 0.3 < CarVolume * 2.8) ? (CarVolume * 2.8) : (CarPrice * 0.3) ; }
                }
            else if(CarAge >= 3.0 && CarAge < 5.0){
                if(CarVolume <= 1500){ DutyPrice = (CarPrice * 0.35 < CarVolume * 1.45) ? (CarVolume * 1.45) : (CarPrice * 0.35) ; }
                else if(CarVolume > 1500 && CarVolume <= 2500){ DutyPrice = (CarPrice * 0.35 < CarVolume * 2.15) ? (CarVolume * 2.15) : (CarPrice * 0.35) ; }
                else if(CarVolume > 2500){ DutyPrice = (CarPrice * 0.35 < CarVolume * 2.8) ? (CarVolume * 2.8) : (CarPrice * 0.35) ; }
                }
            if (CarAge >= 5.0){
                if(CarVolume <= 1500){ DutyPrice = CarVolume * 2.7; }
                else if(CarVolume > 1500 && CarVolume <= 2500){ DutyPrice = CarVolume * 4.0; }
                else if(CarVolume > 2500){ DutyPrice = CarVolume * 5.8; }
                }
            }
		return DutyPrice.toFixed(0);
}
function custom_calc_process()
{
	var form = $("form#custom_calc");
	
	var CarStatus = 1; //default person
	
	var CarFuel = 1;
	
	var CarYear = parseInt($('select[name=car_year]').val());
	var CarMonth = parseInt($('select[name=car_month]').val()) +1;
	
	var CarVolume = parseInt($("input[name='volume']").val());
	
	var CarPrice = parseInt($('input[name=price]').val());
	

	
	var currency = $('select[name=currency]').val();
	//var currency_exchange = 11000/8600; //Currency exchange rate
	var currency_exchange = parseFloat(1.35876); //Currency exchange rate
	
	var NDS = 0.2;
	
	if($("#lico_1").attr("checked"))
	{
		//For physical persons no NDS
		NDS = 1;
		CarStatus = 1;
	}
	
	if($("#lico_2").attr("checked"))
	{
		CarStatus = 2;
		if($("fuel_1").attr("checked"))
		{
			CarFuel = 1;
		}
		else
		{
			$("fuel_2").attr("checked",true)
			CarFuel = 2;
		}
	}
	else
	{
		$("#lico_1").attr("checked",true);
	}

	if((isNaN(CarVolume))||(CarVolume<=0))
	{
		$("input[name='volume']").focus();
		alert('Fill volume');
		return false;
	}
	if((isNaN(CarPrice))||(CarPrice<=0))
	{
		$("input[name='price']").focus();
		alert('Fill price');
		return false;
	}
	
	//Считаем только в ЕВРО
	if(currency == 'usd')
	{
		CarPrice = CarPrice / currency_exchange;
	}	
	var _price = CarPrice;
	var duty = parseInt(CountDuty(CarStatus,CarFuel,CarYear,CarMonth,CarVolume,CarPrice));
	var data ="";//= "Стоимость : " + CountDuty(CarStatus,CarFuel,CarYear,CarVolume,CarPrice);
	data = '<table style="width:500px">'+
                                  '<tbody><tr><td width="65%">Сумма таможенной пошлины составит:</td>'+
                                      '<td> ' + parseFloat(duty).toFixed(0) + ' € <span class="usd-result"> ('+ parseFloat(duty * currency_exchange).toFixed(0) +' $)</span></td>'+
                                  '</tr>';
								  if(2 == CarStatus)
								  {
									
                                   data += '<tr><td width="65%">Сумма НДС: <br>';
                                   data += '<span style="font-weight: normal; font-size: 10px;">20% от полной стоимости (с 24.01.2012)</span></td>';
                                   data += '<td> '+parseFloat((duty+_price) * NDS).toFixed(0)+' € <span class="usd-result"> ('+ parseFloat((duty+_price) * currency_exchange * NDS).toFixed(0)+' $)</span></td>'
                                   data += '</tr>';
                                   data += '<tr><td width="65%">Итого:</td>';
                                   data += '<td class="red"> '+ parseFloat(duty + (duty+_price) * NDS).toFixed(0) +' € <span class="usd-result"> (' +parseFloat(duty * currency_exchange + (duty+_price) * currency_exchange * NDS).toFixed(0)+ ' $)</span></td>';
                                   data += '</tr>';
								   }
	data += '</tbody></table>';
	$('#result').hide().html(data).show()
	return false;
}
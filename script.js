function pic(plik, szer, wys)
{
  var start = plik.lastIndexOf('/');
  var stop = plik.lastIndexOf('.');
  if (stop < start) stop = plik.length;
  var nazwa = plik.substring(start+1, stop);
  var okno = window.open("", "", "menubar=no,toolbar=no,location=no,directories=no,status=no,resizable=no,scrollbars=no" + (szer ? ",width=" + szer : "") + (wys ? ",height=" + wys : ""));
  okno.document.write('<!DOC'+'TYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">\n' +
  '<HT'+'ML>\n' +
  '<HE'+'AD>\n' +
  '<ME'+'TA HTTP-EQUIV="Content-type" CONTENT="text/html; char'+'set=iso-8859-2">\n' +
  '<TI'+'TLE>==========ZAJAZD SZLACHECKI - KRAKÓW==========</TI'+'TLE>\n' +
  '</HE'+'AD>\n' +
  '<BO'+'DY bgcolor="#ffffff" leftmargin="0" topmargin="0" marginwidth="0" marginheight="0">\n' +
  '<table border="0" cellspacing="0" cellpadding="0"><tr><td><a href=javascript:window.close()><img src="' + plik + '" border=0 alt=kliknij&nbsp;aby&nbsp;zamkn±æ&nbsp;okno></a></td></tr></table>'+
  '</BO'+'DY>\n' +
  '</HT'+'ML>');
}

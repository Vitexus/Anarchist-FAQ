var nav = document.createElement('div');
        $(nav).addClass('navbar navbar-default navbar-fixed-top');

var containerFluid = document.createElement('div');
        $(containerFluid).addClass('container-fluid');

var navbarHeader = document.createElement('div');
        $(navbarHeader).addClass('navbar-header');

var navbarToggle = $('<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#afaq-navbar-collapse-1">');

$(navbarToggle).prepend( $('<span class="sr-only">Toggle navigation</span>') );
$(navbarToggle).prepend( $('<span class="icon-bar"></span>') );
$(navbarToggle).prepend( $('<span class="icon-bar"></span>') );
$(navbarToggle).prepend( $('<span class="icon-bar"></span>') );

$(navbarHeader).prepend('<a class="navbar-brand" href="index.html"><img style="max-width:100px; margin-top: -17px; height: 50px;" src="img/anarchism-icon128.gif"></a>');



var navbarCollapse = $('<div class="collapse navbar-collapse" id="afaq-navbar-collapse-1">');
var navbarNavRight = $('<ul class="nav navbar-nav navbar-right">');

$(navbarNavRight).prepend( $('<li><a href="#"  id="nav-next"><span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span></a></li>')  );
$(navbarNavRight).prepend( $('<li><a id="nav-exit" href="#"><span class="glyphicon glyphicon-off" aria-hidden="true"></span> Exit </a></li>')  );
//$(navbarNavRight).prepend( $('<li><a href="#">Action C</a></li>')  );


var navbarNavLeft = $('<ul class="nav navbar-nav ">');
$(navbarNavLeft).prepend( $('<li><a href="#" id="nav-prev" ><span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></a></li>')  );

var sectionsMenu = $('<li class="dropdown">');
$(sectionsMenu).prepend( $('<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Sections <span class="caret"></span></a>') )

var sectionsDropdown = $('<ul class="dropdown-menu" role="menu">');

$(sectionsDropdown).append('<li><a href="intro.html">Introduction</a></li>');
$(sectionsDropdown).append('<li><a href="secAcon.html">Section A - <strong>What is anarchism?</strong></a></li>');
$(sectionsDropdown).append('<li><a href="secBcon.html">Section B - <strong>Why do anarchists oppose the current system?</strong></a></li>');
$(sectionsDropdown).append('<li><a href="secCcon.html">Section C - <strong>What are the myths of capitalist economics?</strong></a></li>');
$(sectionsDropdown).append('<li><a href="secDcon.html">Section D - <strong>How do statism and capitalism affect society?</strong></a></li>');
$(sectionsDropdown).append('<li><a href="secEcon.html">Section E - <strong>What do anarchists think causes ecological problems?</strong></a></li>');
$(sectionsDropdown).append('<li><a href="secFcon.html">Section F - <strong>Is "anarcho"-capitalism a type of anarchism?</strong></a></li>');
$(sectionsDropdown).append('<li><a href="secGcon.html">Section G - <strong>Is individualist anarchism capitalistic?</strong></a></li>');
$(sectionsDropdown).append('<li><a href="secHcon.html">Section H - <strong>Why do anarchists oppose state socialism?</strong></a></li>');
$(sectionsDropdown).append('<li><a href="secIcon.html">Section I - <strong>What would an anarchist society look like?</strong></a></li>');
$(sectionsDropdown).append('<li><a href="secJcon.html">Section J - <strong>What do anarchists do?</strong></a></li>');
$(sectionsDropdown).append('<li><a href="append1.html">Appendix - <strong>Anarchism and "Anarcho"-capitalism</strong></a></li>');
$(sectionsDropdown).append('<li><a href="append2.html">Appendix - <strong>The Symbols of Anarchy</strong></a></li>');
$(sectionsDropdown).append('<li><a href="append3.html">Appendix - <strong>Anarchism and Marxism</strong></a></li>');
$(sectionsDropdown).append('<li><a href="append4.html">Appendix - <strong>The Russian Revolution</strong></a></li>');
$(sectionsDropdown).append('<li><a href="biblio.html">Bibliography</a></li>');



$(sectionsMenu).append(sectionsDropdown);

$(navbarNavLeft).append(sectionsMenu);

$(navbarHeader).prepend( navbarToggle );
$(containerFluid).append( navbarHeader );
$(navbarCollapse).prepend( navbarNavRight );
$(navbarCollapse).append( navbarNavLeft );
$(containerFluid).append( navbarCollapse );
$(nav).prepend( containerFluid );

document.body.appendChild(nav); 

$('body').prepend('<div style="height: 40px;"></div>'); //4menu

$("#nav-prev").click( function(){ history.go(-1); }  );
$("#nav-next").click( function(){ history.go(+1); }  );
$("#nav-exit").click( function(){ window.close(); }  );

---
layout: page
title: service
permalink: /service/
description: Academic service 
nav: false
---
<!-- {% comment %}
*
*  This loop loops through a collection called `collection_name`
*  and sorts it by the front matter variable `date` and than filters
*  the collection with `reverse` in reverse order
*
*  To make it work you first have to assign the data to a new string
*  called `sorted`.
*
{% endcomment %}
<ul>
    {% assign sorted = site.collection_name | sort: 'date' | reverse %}
    {% for item in sorted %}
    <li>{{ item.title }}</li>
    {% endfor %}
</ul> -->
<!-- 
<div class="projects grid">

  {% assign sorted_projects = site.projects | sort: "importance" %}
  {% for project in sorted_projects %}
  <div class="grid-item">
    {% if project.redirect %}
    <a href="{{ project.redirect }}" target="_blank">
    {% else %}
    <a href="{{ project.url | relative_url }}">
    {% endif %}
      <div class="card hoverable">
        {% if project.img %}
        <img src="{{ project.img | relative_url }}" alt="project thumbnail">
        {% endif %}
        <div class="card-body">
          <h2 class="card-title text-lowercase">{{ project.title }}</h2>
          <p class="card-text">{{ project.description }}</p>
          <div class="row ml-1 mr-1 p-0">
            {% if project.github %}
            <div class="github-icon">
              <div class="icon" data-toggle="tooltip" title="Code Repository">
                <a href="{{ project.github }}" target="_blank"><i class="fab fa-github gh-icon"></i></a>
              </div>
              {% if project.github_stars %}
              <span class="stars" data-toggle="tooltip" title="GitHub Stars">
                <i class="fas fa-star"></i>
                <span id="{{ project.github_stars }}-stars"></span>
              </span>
              {% endif %}
            </div>
            {% endif %}
          </div>
        </div>
      </div>
    </a>
  </div>
{% endfor %}

</div> -->

		  <h3>2021</h3>
		  <ul>
			<li><a href="http://splc2021.net/call-for-papers/call-for-tutorial-proposals">Tutorials Chair</a> (with <a href="http://www.lcc.uma.es/~pinto/">M&oacute;nica Pinto</a>), <a href="http://splc2021.net/call-for-papers/call-for-tutorial-proposals">International Systems and Software Product Line Conference (SPLC)</a></li>
		  </ul>
		  <ul>
  		    <li><a href="http://splc2021.net/committees/program-committees">PC Member, International Systems and Software Product Line Conference (SPLC)</a></li>
			<li><a href="https://vamos2021.fh-krems.ac.at/organisation/">PC Member, International Working Conference on Variability Modelling of Software-Intensive Systems (VaMoS)</a></li>
			<li><a href="https://conf.researchr.org/home/icse-2021/ast-2021">PC Member, ACM/IEEE International Conference on Automation of Software Test (AST)</a></li>
			<li><a href="https://icst2021.icmc.usp.br/track/icst-2021-Tools-Demo-Track">PC Member, Tool Demos Track of the IEEE International Conference on Software Testing, Verification and Validation 2021 (ICST)</a></li>
		  </ul>

		  <h3>2020</h3>
		  <ul>
			<li><a href="http://splc2020.net/program-committees/">PC Member, International Systems and Software Product Line Conference (SPLC)</a></li>
			<ul>
				<li>Best Reviewer Award</li>
			</ul>
			<li><a href="https://vamos2020.dbse.iti.cs.ovgu.de/">PC Member, International Working Conference on Variability Modelling of Software-Intensive Systems (VaMoS)</a></li>
			<li><a href="http://cbsoft2020.imd.ufrn.br/sbes-pesquisa.php">PC Member, Brazilian Symposium on Software Engineering (SBES)</a></li>
			<li><a href="http://cbsoft2020.imd.ufrn.br/sbcars.php">PC Member, Brazilian Symposium on Software Components, Architectures, and Reuse (SBCARS)</a></li>
			<li><a href="https://www.ime.usp.br/~sbmf2019/organisation/">PC Member, Brazilian Symposium on Formal Methods (SBMF)</a></li>
			<li><a href="http://cbsoft2020.imd.ufrn.br/sbes-ctic.php">PC Member, Undergraduate Research on Software Engineering Competition (CTIC-ES)</a></li>
			<li><a href="http://cbsoft2020.imd.ufrn.br/wtdsoft.php">PC Member, Workshop on Theses and Dissertations @CBSoft (WTDSoft)</a></li>
			<li><a href="https://conf.researchr.org/track/issta-2020/issta-2020-artifact-evaluation">AEC Member, ACM SIGSOFT International Symposium on Software Testing and Analysis (ISSTA)</a></li>
		</ul>
		<ul>
			<li><a href="https://www.springer.com/journal/10664">Reviewer, Empirical Software Engineering (EMSE)</a></li>
			<li><a href="https://onlinelibrary.wiley.com/journal/10991689">Reviewer, Software Testing, Verification & Reliability (STVR)</a></li>
			<li><a href="https://www.journals.elsevier.com/journal-of-computer-languages">Reviewer, Journal of Computer Languages (COLA)</a></li>
		  </ul>

		  <h3>2019</h3>
			<ul>
				<li><a href="https://cbsoft2019.ufba.br/#/sbcars">PC Chair, Brazilian Symposium on Software Components, Architectures, and Reuse (SBCARS)</a></li>
				<li><a href="https://splc2019.net/call-for-papers/call-for-data-demonstrations-and-tools/">Tools & Demos Track Chair</a> (with <a href="http://ase.jku.at/staff/rabiser/">Rick Rabiser</a>), <a href="https://splc2019.net/call-for-papers/call-for-data-demonstrations-and-tools/">International Systems and Software Product Line Conference (SPLC)</a></li>
				<li><a href="https://splc2019.net/program-committees/">PC Member, International Systems and Software Product Line Conference (SPLC)</a></li>
				<li><a href="https://vamos2019.github.io/organisation/">PC Member, International Workshop on Variability Modelling of Software-Intensive Systems (VaMoS)</a></li>
				<li><a href="https://cbsoft2019.ufba.br/#/sbesresearchtrack">PC Member, Brazilian Symposium on Software Engineering (SBES)</a></li>
				<li><a href="https://www.ime.usp.br/~sbmf2019/organisation/">PC Member, Brazilian Symposium on Formal Methods (SBMF)</a></li>
				<li><a href="https://cbsoft2019.ufba.br/#/sblp">PC Member, Brazilian Symposium on Programming Languages (SBLP)</a></li>
				<li><a href="https://sites.google.com/view/varivolution2019">PC Member, International Workshop on Variability and Evolution of Software-Intensive Systems (VariVolution)</a></li>
				<li><a href="http://clei2019.utp.ac.pa/en/#simposios">PC Member, Latin American Symposium on Software Engineering (SLISW)</a></li>
				<li><a href="https://cbsoft2019.ufba.br/#/wtdsoft">PC Member, Workshop de Teses e Disserta&ccedil;&otilde;es do CBSoft (WTDSoft)</a></li>
			</ul>
			<ul>
				<li><a href="https://www.journals.elsevier.com/journal-of-systems-and-software/">Reviewer, Journal of Systems and Software (JSS)</a></li>
				<li><a href="https://www.journals.elsevier.com/information-and-software-technology">Reviewer, Information and Software Technology (IST)</a></li>
				<li><a href="https://peerj.com/computer-science/">Reviewer, PeerJ Computer Science</a></li>  
			</ul>

		  <h3>2018</h3>
			<ul>
			  <li><a href="http://splc2018.net/">PC Member, International Systems and Software Product Line Conference (SPLC)</a></li>
			  <ul>
				<li>Distinguished Reviewer Award</li>
			  </ul>
			  <li><a href="https://vamos2018.wordpress.com/">PC Member, International Workshop on Variability Modelling of Software-Intensive Systems (VaMoS)</a></li>
			  <li><a href="http://cbsoft2018.icmc.usp.br">PC Member, Brazilian Symposium on Software Components, Architectures, and Reuse (SBCARS)</a></li>
			  <ul>
				<li>Distinguished PC Member</li>
			  </ul>
			  <li><a href="http://cbsoft2018.icmc.usp.br">PC Member, Brazilian Symposium on Software Engineering (SBES)</a></li>
			  <li><a href="http://cbsoft2018.icmc.usp.br">PC Member, Brazilian Symposium on Programming Languages (SBLP)</a></li>
			  <li><a href="http://cleilaclo2018.mackenzie.br/pt/clei-2018/symposia/slisw.html">PC Member, Latin American Symposium on Software Engineering (SLISW)</a></li>
			</ul>
			<ul>
				<li><a href="#">Program Chair, Escola de Inform&aacute;tica Te&oacute;rica e M&eacute;todos Formais (ETMF)</a></li>
			</ul>
			<ul>
			  <li><a href="https://www.computer.org/web/tse">Reviewer, IEEE Transactions on Software Engineering (TSE)</a></li>
			  <li><a href="https://www.journals.elsevier.com/journal-of-systems-and-software/">Reviewer, Journal of Systems and Software (JSS)</a></li>
			  <li><a href="https://www.journals.elsevier.com/information-and-software-technology">Reviewer, Information and Software Technology (IST)</a></li>
			  <li><a href="https://journal-bcs.springeropen.com">Reviewer, Journal of the Brazilian Computer Society (JBCS)</a></li>
			</ul>

		  <h3>2017</h3>
			<ul>
			  <li><a href="http://www.lia.ufc.br/~cbsoft2017/en/xi-sbcars/chamada-de-trabalhos/">PC Member, Brazilian Symposium on Software Components, Architectures, and Reuse (SBCARS)</a></li>
			  <li><a href="http://www.lia.ufc.br/~cbsoft2017/xxi-sblp/">PC Member, Brazilian Symposium on Programming Languages (SBLP)</a></li>
			  <li><a href="http://dsd-seaa2017.ocg.at/splseco2017.html">PC Member, Euromicro DSD/SEAA'17 SPLSeco research track</a></li>
			  <li><a href="http://www.lia.ufc.br/~cbsoft2017/cbsoft/wtdsoft/">PC Member, Workshop de Teses e Disserta&ccedil;&otilde;es do CBSoft (WTDSoft)</a></li>
			</ul>
			<ul>  
			  <li><a href="https://www.computer.org/web/tse">Reviewer, IEEE Transactions on Software Engineering (TSE)</a></li>
			  <li><a href="https://www.journals.elsevier.com/journal-of-systems-and-software/">Reviewer, Journal of Systems and Software (JSS)</a></li>
			  <li><a href="https://jserd.springeropen.com/">Reviewer, Journal of Software Engineering Research and Development (JSERD)</a></li>
			  <li><a href="http://sbmf2017.cin.ufpe.br/">Local Chair, Escola de Inform&aacute;tica Te&oacute;rica e M&eacute;todos Formais (ETMF)</a></li>
			</ul>

		  <h3>2016</h3>
			<ul>
			  <li><a href="http://2016.splashcon.org/track/fosd2016">Program Chair, Seventh International Workshop on Feature-Oriented Software Development (FOSD)</a></li>
			  <li><a href="http://www.splc2016.net/org.html">Publicity Chair, International Systems and Software Product Line Conference (SPLC)</a></li>
			</ul>
			<ul>
			  <li><a href="https://www.tu-braunschweig.de/isf/events/fmsple16">PC Member, International Workshop on Formal Methods and Analysis in Software Product Line Engineering (FMSPLE)</a></li>
			  <li><a href="http://cbsoft.org/sbes2016/organizing-committee?lang=en">PC Member, Brazilian Symposium on Software Engineering (SBES)</a></li>
			  <li><a href="http://cbsoft.org/sblp2016/committee">PC Member, Brazilian Symposium on Programming Languages (SBLP)</a></li>
			  <li><a href="http://cbsoft.org/sbcars2016/committee">PC Member, Brazilian Symposium on Software Components, Architectures, and Reuse (SBCARS)</a></li>
			  <li><a href="http://2016.ecoop.org/committee/ecoop-2016-artifact-evaluation-committee">AEC Member, European Conference on Object-Oriented Programming (ECOOP)</a></li>
			  <li><a href="http://2016.modularity.info/track/src">SRC Member, Modularity</a></li>
			</ul>
			<ul>
			  <li><a href="https://www.computer.org/web/tse">Reviewer, IEEE Transactions on Software Engineering (TSE)</a></li>
			  <li><a href="https://www.journals.elsevier.com/journal-of-systems-and-software/">Reviewer, Journal of Systems and Software (JSS)</a></li>
			  <li><a href="http://onlinelibrary.wiley.com/journal/10.1002/(ISSN)1097-024X">Reviewer, Software: Practice and Experience (SPE)</a></li>
			  <li><a href="http://fm2016.cs.ucy.ac.cy/">Additional Reviewer, International Symposium on Formal Methods (FM)</a></li>
			</ul>

		  <h3>2015</h3>
		  <ul>
			<li><a href="http://cbsoft.org/sbcars2015/committees">PC Member, Brazilian Symposium on Software Components, Architectures and Reuse (SBCARS)</a></li>
			<li><a href="http://cbsoft.org/sbmf2015/committees">PC Member, Brazilian Symposium on Formal Methods (SBMF)</a></li>
			<li><a href="http://www.inf.ufrgs.br/elaes2015/?page_id=68">PC Member, Latin-American School on Software Engineering (ELA-ES)</a></li>
		  </ul>
		  <ul>
			  <li><a href="http://tosem.acm.org/">Reviewer, ACM Transactions on Software Engineering and Methodology (TOSEM)</a></li>
			  <li><a href="https://www.journals.elsevier.com/journal-of-systems-and-software/">Reviewer, Journal of Systems and Software (JSS)</a></li>
			  <li><a href="https://jserd.springeropen.com/">Reviewer, Journal of Software Engineering Research and Development (JSERD)</a></li>
			  <li><a href="http://onlinelibrary.wiley.com/journal/10.1002/(ISSN)1097-024X">Reviewer, Software: Practice and Experience (SPE)</a></li>
			</ul>

		  <h3>2014</h3>
			<ul>
			  <li><a href="http://www.ic.ufal.br/evento/cbsoft2014/en/committees-sbcars.html">PC Member, Brazilian Symposium on Software Components, Architectures and Reuse (SBCARS)</a></li>
			</ul>
			<ul>
			  <li>Additional Reviewer, International Conference on Generative Programming: Concepts & Experiences (GPCE)</li>
			</ul>
			
		  <h3>2013</h3>
			<ul>
			  <li><a href="http://www2.dc.ufscar.br/~lawasp/2013/committess2013.html">PC Member, Latin American Workshop on Aspect-Oriented Software Development (LA-WASP)</a></li>
			</ul>
			<ul>
			  <li>Additional Reviewer, Joint Meeting of the European Software Engineering Conference and the ACM SIGSOFT Symposium on the Foundations of Software Engineering (ESEC/FSE)</li>
			  <li>Additional Reviewer, International Conference on Generative Programming: Concepts & Experiences (GPCE)</li>
			</ul>

		  <h3>2012</h3>
			<ul>
			  <li><a href="http://www2.dc.ufscar.br/~lawasp/2012/committess2012.html">PC Member, Latin American Workshop on Aspect-Oriented Software Development (LA-WASP)</a></li>
			</ul>
			<ul>
			  <li>Additional Reviewer, International Software Product Line Conference (SPLC)</li>
			  <li>Additional Reviewer, International Conference on Model Driven Engineering Languages & Systems (MODELS)</li>
			  <li>Additional Reviewer, International Conference on Software Language Engineering (SLE)</li>
			</ul>

		  <h3>2011</h3>
			<ul>
			  <li>PC Member, Latin American Workshop on Aspect-Oriented Software Development (LA-WASP)</li>
			  <li>Additional Reviewer, International Conference on Automated Software Engineering (ASE)</li>
			  <li>Additional Reviewer, International Conference on Model Driven Engineering Languages & Systems (MODELS)</li>
			  <li>Additional Reviewer, Brazilian Symposium on Software Engineering (SBES)</li>
			</ul>

---
layout: page
title: service
permalink: /service/
description: 
nav: true
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
</div> 
{% endcomment %} -->

### 2021

*   [Tutorials Chair](http://splc2021.net/call-for-papers/call-for-tutorial-proposals) (with [Mónica Pinto](http://www.lcc.uma.es/~pinto/)), [International Systems and Software Product Line Conference (SPLC)](http://splc2021.net/call-for-papers/call-for-tutorial-proposals)
*   [PC Member, International Systems and Software Product Line Conference (SPLC)](http://splc2021.net/committees/program-committees)
*   [PC Member, ACM SIGPLAN International Conference on Generative Programming: Concepts & Experiences (GPCE)](https://conf.researchr.org/home/gpce-2021)
*   [PC Member, International Working Conference on Variability Modelling of Software-Intensive Systems (VaMoS)](https://vamos2021.fh-krems.ac.at/organisation/)
*   [PC Member, ACM/IEEE International Conference on Automation of Software Test (AST)](https://conf.researchr.org/home/icse-2021/ast-2021)
*   [PC Member, International Workshop on Variability and Evolution of Software-Intensive Systems (VariVolution)](https://sites.google.com/view/varivolution2021)
*   [PC Member, Tool Demos Track of the IEEE International Conference on Software Testing, Verification and Validation 2021 (ICST)](https://icst2021.icmc.usp.br/track/icst-2021-Tools-Demo-Track)
*   [PC Member, Brazilian Symposium on Software Engineering (SBES)](http://cbsoft2021.joinville.udesc.br/sbes-pesquisa.php)
*   [PC Member, Brazilian Symposium on Software Components, Architectures, and Reuse (SBCARS)](http://cbsoft2021.joinville.udesc.br/sbcars.php)
*   [PC Member, Brazilian Symposium on Formal Methods (SBMF)](#)
*   [PC Member, Undergraduate Research on Software Engineering Competition (CTIC-ES)](http://cbsoft2021.joinville.udesc.br/index.php)

### 2020

*   [PC Member, International Systems and Software Product Line Conference (SPLC)](http://splc2020.net/program-committees/)
    *   Best Reviewer Award
*   [PC Member, International Working Conference on Variability Modelling of Software-Intensive Systems (VaMoS)](https://vamos2020.dbse.iti.cs.ovgu.de/)
*   [PC Member, International Workshop on Variability and Evolution of Software-Intensive Systems (VariVolution)](https://sites.google.com/view/varivolution2020)
*   [PC Member, Brazilian Symposium on Software Engineering (SBES)](http://cbsoft2020.imd.ufrn.br/sbes-pesquisa.php)
*   [PC Member, Brazilian Symposium on Software Components, Architectures, and Reuse (SBCARS)](http://cbsoft2020.imd.ufrn.br/sbcars.php)
*   [PC Member, Brazilian Symposium on Formal Methods (SBMF)]()
*   [PC Member, Undergraduate Research on Software Engineering Competition (CTIC-ES)](http://cbsoft2020.imd.ufrn.br/sbes-ctic.php)
*   [PC Member, Workshop on Theses and Dissertations @CBSoft (WTDSoft)](http://cbsoft2020.imd.ufrn.br/wtdsoft.php)
*   [AEC Member, ACM SIGSOFT International Symposium on Software Testing and Analysis (ISSTA)](https://conf.researchr.org/track/issta-2020/issta-2020-artifact-evaluation)
*   [Reviewer, Empirical Software Engineering (EMSE)](https://www.springer.com/journal/10664)
*   [Reviewer, Software Testing, Verification & Reliability (STVR)](https://onlinelibrary.wiley.com/journal/10991689)
*   [Reviewer, Journal of Computer Languages (COLA)](https://www.journals.elsevier.com/journal-of-computer-languages)

### 2019

*   [PC Chair, Brazilian Symposium on Software Components, Architectures, and Reuse (SBCARS)](https://cbsoft2019.ufba.br/#/sbcars)
*   [Tools & Demos Track Chair](https://splc2019.net/call-for-papers/call-for-data-demonstrations-and-tools/) (with [Rick Rabiser](http://ase.jku.at/staff/rabiser/)), [International Systems and Software Product Line Conference (SPLC)](https://splc2019.net/call-for-papers/call-for-data-demonstrations-and-tools/)
*   [PC Member, International Systems and Software Product Line Conference (SPLC)](https://splc2019.net/program-committees/)
*   [PC Member, International Workshop on Variability Modelling of Software-Intensive Systems (VaMoS)](https://vamos2019.github.io/organisation/)
*   [PC Member, Brazilian Symposium on Software Engineering (SBES)](https://cbsoft2019.ufba.br/#/sbesresearchtrack)
*   [PC Member, Brazilian Symposium on Formal Methods (SBMF)](https://www.ime.usp.br/~sbmf2019/organisation/)
*   [PC Member, Brazilian Symposium on Programming Languages (SBLP)](https://cbsoft2019.ufba.br/#/sblp)
*   [PC Member, International Workshop on Variability and Evolution of Software-Intensive Systems (VariVolution)](https://sites.google.com/view/varivolution2019)
*   [PC Member, Latin American Symposium on Software Engineering (SLISW)](http://clei2019.utp.ac.pa/en/#simposios)
*   [PC Member, Workshop de Teses e Dissertações do CBSoft (WTDSoft)](https://cbsoft2019.ufba.br/#/wtdsoft)
*   [Reviewer, Journal of Systems and Software (JSS)](https://www.journals.elsevier.com/journal-of-systems-and-software/)
*   [Reviewer, Information and Software Technology (IST)](https://www.journals.elsevier.com/information-and-software-technology)
*   [Reviewer, PeerJ Computer Science](https://peerj.com/computer-science/)

### 2018

*   [PC Member, International Systems and Software Product Line Conference (SPLC)](http://splc2018.net/)
    *   Distinguished Reviewer Award
*   [PC Member, International Workshop on Variability Modelling of Software-Intensive Systems (VaMoS)](https://vamos2018.wordpress.com/)
*   [PC Member, Brazilian Symposium on Software Components, Architectures, and Reuse (SBCARS)](http://cbsoft2018.icmc.usp.br)
    *   Distinguished PC Member
*   [PC Member, Brazilian Symposium on Software Engineering (SBES)](http://cbsoft2018.icmc.usp.br)
*   [PC Member, Brazilian Symposium on Programming Languages (SBLP)](http://cbsoft2018.icmc.usp.br)
*   [PC Member, Latin American Symposium on Software Engineering (SLISW)](http://cleilaclo2018.mackenzie.br/pt/clei-2018/symposia/slisw.html)
*   [Program Chair, Escola de Informática Teórica e Métodos Formais (ETMF)](#)
*   [Reviewer, IEEE Transactions on Software Engineering (TSE)](https://www.computer.org/web/tse)
*   [Reviewer, Journal of Systems and Software (JSS)](https://www.journals.elsevier.com/journal-of-systems-and-software/)
*   [Reviewer, Information and Software Technology (IST)](https://www.journals.elsevier.com/information-and-software-technology)
*   [Reviewer, Journal of the Brazilian Computer Society (JBCS)](https://journal-bcs.springeropen.com)

### 2017

*   [PC Member, Brazilian Symposium on Software Components, Architectures, and Reuse (SBCARS)](http://www.lia.ufc.br/~cbsoft2017/en/xi-sbcars/chamada-de-trabalhos/)
*   [PC Member, Brazilian Symposium on Programming Languages (SBLP)](http://www.lia.ufc.br/~cbsoft2017/xxi-sblp/)
*   [PC Member, Euromicro DSD/SEAA'17 SPLSeco research track](http://dsd-seaa2017.ocg.at/splseco2017.html)
*   [PC Member, Workshop de Teses e Dissertações do CBSoft (WTDSoft)](http://www.lia.ufc.br/~cbsoft2017/cbsoft/wtdsoft/)
*   [Reviewer, IEEE Transactions on Software Engineering (TSE)](https://www.computer.org/web/tse)
*   [Reviewer, Journal of Systems and Software (JSS)](https://www.journals.elsevier.com/journal-of-systems-and-software/)
*   [Reviewer, Journal of Software Engineering Research and Development (JSERD)](https://jserd.springeropen.com/)
*   [Local Chair, Escola de Informática Teórica e Métodos Formais (ETMF)](http://sbmf2017.cin.ufpe.br/)

### 2016

*   [Program Chair, Seventh International Workshop on Feature-Oriented Software Development (FOSD)](http://2016.splashcon.org/track/fosd2016)
*   [Publicity Chair, International Systems and Software Product Line Conference (SPLC)](http://www.splc2016.net/org.html)
*   [PC Member, International Workshop on Formal Methods and Analysis in Software Product Line Engineering (FMSPLE)](https://www.tu-braunschweig.de/isf/events/fmsple16)
*   [PC Member, Brazilian Symposium on Software Engineering (SBES)](http://cbsoft.org/sbes2016/organizing-committee?lang=en)
*   [PC Member, Brazilian Symposium on Programming Languages (SBLP)](http://cbsoft.org/sblp2016/committee)
*   [PC Member, Brazilian Symposium on Software Components, Architectures, and Reuse (SBCARS)](http://cbsoft.org/sbcars2016/committee)
*   [AEC Member, European Conference on Object-Oriented Programming (ECOOP)](http://2016.ecoop.org/committee/ecoop-2016-artifact-evaluation-committee)
*   [SRC Member, Modularity](http://2016.modularity.info/track/src)
*   [Reviewer, IEEE Transactions on Software Engineering (TSE)](https://www.computer.org/web/tse)
*   [Reviewer, Journal of Systems and Software (JSS)](https://www.journals.elsevier.com/journal-of-systems-and-software/)
*   [Reviewer, Software: Practice and Experience (SPE)](http://onlinelibrary.wiley.com/journal/10.1002/(ISSN)1097-024X)
*   [Additional Reviewer, International Symposium on Formal Methods (FM)](http://fm2016.cs.ucy.ac.cy/)

### 2015

*   [PC Member, Brazilian Symposium on Software Components, Architectures and Reuse (SBCARS)](http://cbsoft.org/sbcars2015/committees)
*   [PC Member, Brazilian Symposium on Formal Methods (SBMF)](http://cbsoft.org/sbmf2015/committees)
*   [PC Member, Latin-American School on Software Engineering (ELA-ES)](http://www.inf.ufrgs.br/elaes2015/?page_id=68)
*   [Reviewer, ACM Transactions on Software Engineering and Methodology (TOSEM)](http://tosem.acm.org/)
*   [Reviewer, Journal of Systems and Software (JSS)](https://www.journals.elsevier.com/journal-of-systems-and-software/)
*   [Reviewer, Journal of Software Engineering Research and Development (JSERD)](https://jserd.springeropen.com/)
*   [Reviewer, Software: Practice and Experience (SPE)](http://onlinelibrary.wiley.com/journal/10.1002/(ISSN)1097-024X)

### 2014

*   [PC Member, Brazilian Symposium on Software Components, Architectures and Reuse (SBCARS)](http://www.ic.ufal.br/evento/cbsoft2014/en/committees-sbcars.html)
*   Additional Reviewer, International Conference on Generative Programming: Concepts & Experiences (GPCE)

### 2013

*   [PC Member, Latin American Workshop on Aspect-Oriented Software Development (LA-WASP)](http://www2.dc.ufscar.br/~lawasp/2013/committess2013.html)
*   Additional Reviewer, Joint Meeting of the European Software Engineering Conference and the ACM SIGSOFT Symposium on the Foundations of Software Engineering (ESEC/FSE)
*   Additional Reviewer, International Conference on Generative Programming: Concepts & Experiences (GPCE)

### 2012

*   [PC Member, Latin American Workshop on Aspect-Oriented Software Development (LA-WASP)](http://www2.dc.ufscar.br/~lawasp/2012/committess2012.html)
*   Additional Reviewer, International Software Product Line Conference (SPLC)
*   Additional Reviewer, International Conference on Model Driven Engineering Languages & Systems (MODELS)
*   Additional Reviewer, International Conference on Software Language Engineering (SLE)

### 2011

*   PC Member, Latin American Workshop on Aspect-Oriented Software Development (LA-WASP)
*   Additional Reviewer, International Conference on Automated Software Engineering (ASE)
*   Additional Reviewer, International Conference on Model Driven Engineering Languages & Systems (MODELS)
*   Additional Reviewer, Brazilian Symposium on Software Engineering (SBES)
---
layout: page
title: students
permalink: /students/
description: Students 
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
</ul> 
{% endcomment %}
-->

		  <h3>Current</h3>
		  <ul>
			<li>Jairo Raphael Moreira Correia de Souza. (PhD, since March 2020)</li>
			<li>Rodrigo dos Santos Lima. (PhD, since March 2020)</li>
			<li>Rodrigo Jos&eacute; Sarmento Peixoto. (PhD, since March 2020)</li>
			<li>La&iacute;s da Silva Farias. (MSc, since March 2020)</li>
			<li>Raquel Maria Santos de Oliveira Moura. (MSc, since March 2020)</li>
			<li>Igor Nascimento dos Santos. (MSc, since August 2019)</li>
			<li>Karine Galdino Maia Gomes. (PhD, since March 2019)</li>
			<li>Alex Juvencio Costa. (PhD, since March 2019)</li>
		  </ul>
		  <h3>Past students</h3>
		  <ul>
			<li>
				Thiago Mael de Castro. <i>A Machine-Verified Theory of Commuting Strategies for Product-Line Reliability Analysis</i>. (PhD 2019, co-advised with <a href="https://cic.unb.br/~valves/">Vander Alves</a>).
			</li>
			<li>
				Pedro Henrique Sousa de Moraes. <i>Willow: A Tool for Interactive Data Structures and Algorithms Visualization</i>. (MSc 2020)
			</li>
			<li>
				Thayonara de Pontes Alves. <i>Porting the Software Product Line Refinement Theory to the Coq proof assistant: A Case Study</i>. (MSc 2020)
			</li>
			<li>
				Samuel Bristot Loli. <i>Object-Relational Mapping Code Smells in Java Projects: A catalog and a detection tool</i>. (MSc 2020)
			</li>
			<li>
				Daniel Severo Estr&aacute;zulas. <i>A domain specific language for describing classification rules in the quota system of the brazilian federal public education network</i>. (MSc 2020)
			</li>
			<li>
				Karine Galdino Maia Gomes. <i>Characterizing Safe and Partially Safe Evolution Scenarios in Product Lines: An Empirical Study</i>. (MSc 2019)
			</li>
			<li>
				Alex Juvencio Costa. <i>Test Strategies for Smart Cities Applications: A Mapping Study</i>. (MSc 2019)
			</li>
			<li>
				Gabriel Ibson de Souza. <i>On the challenges and architectural impacts of introducing gamification into a software system: The VazaZika case study.</i>. (MSc 2019)
			</li>
			<li>
				Victor Laerte de Oliveira. <i>An Empirical Study on the Adoption of the Kotlin Programming Language for Android Development</i>. (MSc 2019)
			</li>
			<li>
				Bruce Fabian Reis Albuquerque. <i>Evaluating the consistency of government sites to the coding guidelines from the web standards of electronig government (e-PWG)</i>. (MSc 2018)
			</li>
			<li>
				Gabriela Cunha Sampaio. <i>Partially safe evolution of software product lines</i>. (MSc 2017, co-advised with <a href="https://pauloborba.github.io/">Paulo Borba</a>)
			</li>
			<li>
				Fernando Chaves Benbassat. <i>Safe evolution of product lines: Feature extraction scenarios</i>. (MSc 2017, co-advised with <a href="https://pauloborba.github.io/">Paulo Borba</a>)
			</li>
			<li>
				Thiago Mael de Castro. <i>Commutative strategies for reliability analysis of software product lines</i>. (MSc 2016, co-advised with <a href="https://cic.unb.br/~valves/">Vander Alves</a>)
			</li>
		</ul>


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

# Minimal Tabs for jQuery

####Minimal Tabs plugin for jQuery

##How to use?
- In `$(document).ready(function(){});` section;
- Put `$.minimalTabs();` code;
- You can add `$("#tab_1").click();` to start with a tab clicked;
- Stylize the CSS with your preferences;
- Done!

##Features:
- Very easy to use! Too light to load (only 5 KB, this plugin and your style together)
- Supports keyboard navigation (using the "tab" and then "enter" on the desired tab)
 
##Install:
```html
		<link rel="stylesheet" type="text/css" href="jquery.minimalTabs.css" />
		<script src="http://code.jquery.com/jquery-latest.js"></script>
		<script src="jquery.minimalTabs.js"></script>
```
##The code:
```html
		<script type="text/javascript">
			$(document).ready(function() {
				$.minimalTabs();
			});
		</script>
```
##The html:
```html
		<div id="Container">
			<p id="Tabs">
				<a href="#tab1" id="tab_1" class="tabs">Aba um</a>
				<a href="#tab2" id="tab_2" class="tabs">Aba dois</a>
				<a href="#tab3" id="tab_3" class="tabs">Aba três</a>
			</p>
			<ul id="Content">
				<li id="tab1" class="tab-content">
					<p>Conteúdo da primeira aba.</p>
					<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
				</li>
				<li id="tab2" class="tab-content">
					<p>Conteúdo da segunda aba.</p>
					<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
				</li>
				<li id="tab3" class="tab-content">
					<p>Conteúdo da terceira aba.</p>
					<ol>
						<li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
						<li>Aenean commodo ligula eget dolor.</li>
						<li>Aenean massa.</li>
					</ol>
					<p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
				</li>
			</ul>
		</div>
```
##Links:
- Plugin page <http://db.vinicius-stutz.com/u/28591707/GitHub/jquery.minimalTabs/index.html>
- Official website <http://www.vinicius-stutz.com/>

Enjoy!

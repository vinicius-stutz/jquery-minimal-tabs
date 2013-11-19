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
- Plugin page <http://vinicius-stutz.github.io/jquery.minimalTabs>
- Official website <http://www.vinicius-stutz.com/>

##MIT License
The MIT License (MIT)

Copyright (c) 2013 Vinícius Stutz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

Enjoy!

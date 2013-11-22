# Minimal Tabs for jQuery

####Minimal Tabs plugin for jQuery

##How to use?
- In `$(document).ready(function(){});` section;
- Put `$("#MyTabs").minimalTabs();` code;
- You can add `$("#Tab1").click();` to start with a tab clicked;
- Stylize the CSS with your preferences;
- Done!

##Features:
- Very easy to use! Too light to load (only 6 KB, this plugin and your style together)
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
        $("#MyTabs").minimalTabs();
    });
</script>
```
##The html:
```html
<div id="MyTabs" class="tabs-container">
    <p class="tabs">
        <a href="#Tab1" id="TabTitle1">Tab one</a>
        <a href="#Tab2" id="TabTitle2">Tab two</a>
        <a href="#Tab3" id="TabTitle3">Tab three</a>
    </p>
    <ul class="tabs-content">
        <li id="Tab1" class="tab-content">
            <p>Content of first tab.</p>
        </li>
        <li id="Tab2" class="tab-content">
            <p>Content of second tab.</p>
        </li>
        <li id="Tab3" class="tab-content">
            <p>Content of third tab.</p>
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

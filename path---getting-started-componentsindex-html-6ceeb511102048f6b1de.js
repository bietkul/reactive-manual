webpackJsonp([0xd25c9a408a35],{457:function(e,t){e.exports={data:{markdownRemark:{html:'<p><strong>ReactiveSearch</strong> provides React UI components for Elasticsearch. This document explains the different kinds of components offered by the library and walks throughs scenarios of when to use which component.</p>\n<p>Components are divided into four broad categories:  </p>\n<ol>\n<li><code>List components</code> represent all kinds of list related UI components which typically create a term query.</li>\n<li><code>Range components</code> represent all kinds of numbers and dates related UI components which typically create a range based query.</li>\n<li><code>Search components</code> represent searchbar UIs, which typically apply search on full-text data.</li>\n<li><code>Result components</code> are components for displaying results (aka hits) from queries created by other components.</li>\n</ol>\n<p>Besides these four specific categories, we also have <code>Base components</code> that are useful primitives and components that don’t belong to any of the above categories.</p>\n<h2 id="1-list-components"><a href="#1-list-components" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>1. List Components</h2>\n<p>List is one of the most used data-driven UI displays and hence naturally, we offer a variety of ways to use this UI style.</p>\n<h4 id="string-or-text-datatype"><a href="#string-or-text-datatype" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>String or Text Datatype</h4>\n<p>The following are all the possible UI components for a <code>Text</code> or <code>String</code> datatype field in your appbase.io app. These apply a <strong>term</strong> or <strong>terms</strong> database query on the selected item(s).</p>\n<p>The components can also be used with <code>Numeric</code> datatype fields.</p>\n<p>\n<img src="https://imgur.com/p2PBKh6.png" style="float:left"></p>\n<p><strong><a href="/list-components/singlelist.html">SingleList</a></strong> is useful for displaying a list of values where only one item can be selected at a time, and the values are retrieved by a database query on the field specified in the <strong>dataField</strong> prop.</p>\n</p>\n<p>\n<img src="https://imgur.com/waVNdgr.png" style="float:left"></p>\n<p><strong><a href="/list-components/multilist.html">MultiList</a></strong> is useful for displaying a list of values where multiple values can be selected at a time. Similar to SingleList, these values are retrieved by a database query on the field specified in the <strong>dataField</strong> prop.</p>\n</p>\n<p>\n<img src="https://imgur.com/b9l8Mhd.png" style="float:left"></p>\n<p><strong><a href="/list-components/singledatalist.html">SingleDataList</a></strong> is useful for displaying a list of user defined values where only one value item can be selected at a time. Unlike SingleList and MultiList where the values are auto-fetched, here the <strong>data</strong> prop allows curation of which values to display.</p>\n</p>\n<p>\n<img src="https://imgur.com/2b1iVDZ.png" style="float:left"></p>\n<p><strong><a href="/list-components/multidatalist.html">MultiDataList</a></strong> is useful for displaying a list of user defined values where multiple value items can be selected at a time. Similar to the SingleDataList component, the <strong>data</strong> prop allows curation of which values to display.</p>\n</p>\n<blockquote>\n<p>List vs DataList</p>\n<p>Use-cases where curation is important and only a few items need to be shown should use DataList components. Since it doesn’t need to  auto-fetch the results, it also saves a network request.</p>\n</blockquote>\n<p>\n<img src="https://imgur.com/a1be47e.png" style="float:left"></p>\n<p><strong><a href="/list-components/singledropdownlist.html">SingleDropdownList</a></strong> displays a dropdown list UI where only one item can be selected at a time. It is similar to SingleList but is presented in a dropdown format to save space.</p>\n</p>\n<p>\n<img src="https://imgur.com/UVymwfo.png" style="float:left"></p>\n<p><strong><a href="/list-components/multidropdownlist.html">MultiDropdownList</a></strong> displays a dropdown list UI where multiple items can be selected at a time. It is similar to MultiList.</p>\n</p>\n<br>\n<blockquote>\n<p>When to use dropdown lists</p>\n<p>Dropdown lists take up less space. If you have many filters to display or a smaller display area (like on phones), it is better to use dropdown lists.</p>\n</blockquote>\n<h2 id="2-range-components"><a href="#2-range-components" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>2. Range Components</h2>\n<p>The following are all the possible UI components for a numeric datatype field in your appbase.io app. These apply a <strong>range</strong> database query on the selected item(s).</p>\n<p>\n<img src="https://imgur.com/tPi76EU.png" style="float:left"></p>\n<p><strong><a href="/range-components/singlerange.html">SingleRange</a></strong> displays a curated list of items where only one item can be selected at a time. Each item represents a range of values, specified in the <strong>data</strong> prop of the component.</p>\n</p>\n<blockquote>\n<p><i class="fa fa-info-circle"></i> Note</p>\n<p>Its counterpart for a String datatype would be <strong>SingleDataList</strong> component.</p>\n</blockquote>\n<p>\n<img src="https://imgur.com/ulEoXvy.png" style="float:left"></p>\n<p><strong><a href="/range-components/multirange.html">MultiRange</a></strong> displays a curated list of items where multiple items can be selected at a time. Each item represents a range of values, specified in the <strong>data</strong> prop of the component.</p>\n</p>\n<blockquote>\n<p><i class="fa fa-info-circle"></i> Note</p>\n<p>Its counterpart for a String datatype would be <strong>MultiDataList</strong> component.</p>\n</blockquote>\n<p>\n<img src="https://imgur.com/2xxBIUg.png" style="float:left"></p>\n<p><strong><a href="/range-components/singledropdownrange.html">SingleDropdownRange</a></strong> displays a dropdown list UI where only one item can be selected at a time. Each item in this dropdown list represents a range, specified in the <strong>data</strong> prop of the component.</p>\n</p>\n<p>\n<img src="https://imgur.com/MrTth88.png" style="float:left"></p>\n<p><strong><a href="/range-components/multidropdownrange.html">MultiDropdownRange</a></strong> displays a dropdown list UI where only multiple items can be selected at a time. Each item in this dropdown list represents a range, specified in the <strong>data</strong> prop of the component.</p>\n</p>\n<h3 id="rangeslider"><a href="#rangeslider" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>RangeSlider</h3>\n<p>\n<img src="https://imgur.com/n4HJ8dD.png" style="float:left"></p>\n<p><strong><a href="/range-components/rangeslider.html">RangeSlider</a></strong> component applies on a numeric datatype (ideally an integer) field and displays a slider UI.</p>\n</p>\n<blockquote>\n<p>RangeSlider vs Range lists</p>\n<p>A RangeSlider is useful when the selection of values is homogeneous, e.g. price across a set of products.</p>\n</blockquote>\n<h3 id="dynamicrangeslider"><a href="#dynamicrangeslider" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>DynamicRangeSlider</h3>\n<p>\n<img src="https://imgur.com/n4HJ8dD.png" style="float:left"></p>\n<p><strong><a href="/range-components/dynamicrangeslider.html">DynamicRangeSlider</a></strong> is a more specific version of the <a href="/range-components/rangeslider.html">RangeSlider</a> component where the available range is dynamically set based on the sub-set of data filtered by other components in the view.</p>\n</p>\n<h3 id="rangeinput"><a href="#rangeinput" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>RangeInput</h3>\n<p>\n<img src="https://imgur.com/n4HJ8dD.png" style="float:left"></p>\n<p><strong><a href="/range-components/rangeinput.html">RangeInput</a></strong> component displays a <a href="/range-components/rangeslider.html">RangeSlider</a> with input controls.</p>\n</p>\n<h3 id="numberbox"><a href="#numberbox" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>NumberBox</h3>\n<p>\n<img src="https://imgur.com/svE3sly.png" style="float:left"></p>\n<p><strong><a href="/range-components/numberbox.html">NumberBox</a></strong> component applies on a numeric datatype field where you want to display a selectable field value that can be incrementally increased or decreased, e.g. no of guests field in a hotel booking app.</p>\n</p>\n<h3 id="datepicker-and-daterange"><a href="#datepicker-and-daterange" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>DatePicker and DateRange</h3>\n<p>\n<img src="https://imgur.com/rJsL0mK.png" style="float:left"><img src="https://imgur.com/7dKLsNO.png" style="float:left"></p>\n<p><strong><a href="/range-components/datepicker.html">DatePicker</a></strong> and <strong><a href="/range-components/daterange.html">DateRange</a></strong> components are useful for showing selectable date fields. They apply to Date datatype field, and internally apply a date range query on the database.</p>\n</p>\n<h3 id="ratingsfilter"><a href="#ratingsfilter" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>RatingsFilter</h3>\n<p>\n<img src="https://imgur.com/BxizhXe.png" style="float:left"></p>\n<p><strong><a href="/range-components/ratingsfilter.html">RatingsFilter</a></strong> is useful for showing a UI selection choice based on ratings score. To be applied on a numeric datatype field.</p>\n</p>\n<h2 id="3-search-components"><a href="#3-search-components" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>3. Search Components</h2>\n<p>The following are UI components that represent searchbar UIs. The datatype for the <code>dataField</code> in these components should be a <code>Text</code> (or <code>String</code>) or <code>Keyword</code>, along with custom analyzer (like ngrams) based mappings defined in sub-fields.</p>\n<h3 id="datasearch"><a href="#datasearch" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>DataSearch</h3>\n<p>\n<img src="https://imgur.com/kbnVVkZ.png" style="float:left"></p>\n<p><strong><a href="/search-components/datasearch.html">DataSearch</a></strong> displays a search input box. It supports autosuggestions, highlighting of results and querying against more than one fields via props.</p>\n</p>\n<blockquote>\n<p><i class="fa fa-info-circle"></i> Note</p>\n<p>If you are looking to apply a query on a user input, <strong>DataSearch</strong> is preferable over <strong>TextField</strong>.</p>\n</blockquote>\n<h3 id="categorysearch"><a href="#categorysearch" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>CategorySearch</h3>\n<p>\n<img src="https://imgur.com/kbnVVkZ.png" style="float:left"></p>\n<p><strong><a href="/search-components/categorysearch.html">CategorySearch</a></strong> is a more specific version of the  <a href="/basic-components/datasearch.html">DataSearch</a> component. The main difference is that it can show suggestions within specific categories besides the general auto-suggestions that appear in the search dropdown.</p>\n</p>\n<h2 id="4-result-components"><a href="#4-result-components" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>4. Result Components</h2>\n<p>Result components are used for displaying the results (aka hits).</p>\n<blockquote>\n<p>How do result components fetch results by combining queries from multiple components?</p>\n<p>They do this via <a href="/advanced/react.html"><strong>react</strong></a> prop, which allows each component to specify their dependent components using a DSL that mirrors Elasticsearch’s compound query DSL for bool clause.</p>\n</blockquote>\n<h3 id="resultlist"><a href="#resultlist" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>ResultList</h3>\n<p>\n<img src="https://imgur.com/L8xTmWd.png" style="float:left"></p>\n<p><strong><a href="/result-components/resultlist.html">ResultList</a></strong> displays the results in a list layout.</p>\n</p>\n<h3 id="resultcard"><a href="#resultcard" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>ResultCard</h3>\n<p>\n<img src="https://imgur.com/VGra3hs.png" style="float:left"></p>\n<p><strong><a href="/result-components/resultcard.html">ResultCard</a></strong> displays the results in a card layout.</p>\n</p>\n<h3 id="reactivelist"><a href="#reactivelist" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>ReactiveList</h3>\n<p>\n<img src="https://imgur.com/PCBwK7t.png" style="float:left"></p>\n<p><strong><a href="/result-components/reactivelist.html">ReactiveList</a></strong> displays the results in a configurable list layout. This is a more flexible display component (used internally by both ResultList and ResultCard) that allows more customization than ResultList and ResultCard.</p>\n</p>\n<h3 id="reactivecomponent"><a href="#reactivecomponent" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>ReactiveComponent</h3>\n<p>\n<img src="https://imgur.com/QgjzJv5.png" style="float:left"></p>\n<p><strong><a href="/advanced/reactivecomponent.html">ReactiveComponent</a></strong> is a wrapper component that allows you to connect custom component(s) (passed as children) with the Reactivesearch ecosystem, e.g. if we are building an e-commerce store where we have a react component called <code>ColorPicker</code> which renders the <code>colors</code> passed to it as tiles, allowing us to filter the products by their colors.</p>\n</p>\n<h2 id="5-base-components"><a href="#5-base-components" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>5. Base Components</h2>\n<h3 id="textfield"><a href="#textfield" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>TextField</h3>\n<p>\n<img src="https://imgur.com/PgOi2QY.png" style="float:left"></p>\n<p><strong><a href="/base-components/textfield.html">TextField</a></strong> displays a text input field. It applies a <strong>match</strong> database query on the entered text.</p>\n</p>\n<h3 id="togglebutton"><a href="#togglebutton" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>ToggleButton</h3>\n<p>\n<img src="https://imgur.com/Ocb9Sir.png" style="float:left"></p>\n<p><strong><a href="/base-components/togglebutton.html">ToggleButton</a></strong> component applies on a String or Text datatype field where you want users to select a choice (or choices) amongst a small number of total choices.</p>\n</p>\n<h3 id="tagcloud"><a href="#tagcloud" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>TagCloud</h3>\n<p>\n<img src="https://imgur.com/lC5KfOK.png" style="float:left"></p>\n<p><strong><a href="/base-components/tagcloud.html">TagCloud</a></strong> is useful for showing a weighted tag cloud of items based on the frequency of occurrences.</p>\n</p>\n<h3 id="datacontroller"><a href="#datacontroller" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>DataController</h3>\n<p>\n<img src="https://imgur.com/qdxEIAz.png" style="float:left"></p>\n<p><strong><a href="/base-components/datacontroller.html">DataController</a></strong> is a UI optional component for adding additional queries, e.g. a query based on current URL page path, a default query, a query based on user’s global profile preferences. At the same time, it can also have a UI - this is a catchall component to display something that doesn’t fit within other components.</p>\n</p>\n<h3 id="selectedfilters"><a href="#selectedfilters" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>SelectedFilters</h3>\n<p><strong><a href="/base-components/selectedfilters.html">SelectedFilters</a></strong> is a selection component to render the selected values from other components with a “Clear All” option.</p>',frontmatter:{title:"Components Overview",next:"list-components/singlelist.html",prev:"getting-started/reactivebase.html",nextTitle:"Single List",prevTitle:"Base Component"},fields:{path:"getting-started/ComponentsIndex.md",slug:"getting-started/componentsindex.html"}}},pathContext:{slug:"getting-started/componentsindex.html"}}}});
//# sourceMappingURL=path---getting-started-componentsindex-html-6ceeb511102048f6b1de.js.map
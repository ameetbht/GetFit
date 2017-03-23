var http = require('http');
var EventEmitter = require('events').EventEmitter;
var utils = require('util');
function moduleRender(){
	EventEmitter.call(this);
}
utils.inherits(moduleRender,EventEmitter);


moduleRender.prototype.render=function(req) {	
		console.log("Received REQ");
		var html = '<!DOCTYPE HTML>\
\
<html>\
	<head>\
		<title>Landing</title>\
		<meta charset="utf-8" />\
		<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />\
		<link rel="stylesheet" href="assets/css/main.css" />\
		</head>\
	<body>\
\
		<!-- Wrapper -->\
			<div id="wrapper">\
\
				<!-- Header -->\
					<header id="header" class="alt style2">\
						<a href="index.html" class="logo"><strong>GETFIT</strong> <span>by Amit, Ashish, Joe and Fritz</span></a>\
						\
					</header>\
\
				<!-- Banner -->\
					<section id="banner" class="style2">\
						<div class="inner">\
							<span class="image">\
								<img src="images/banner.jpg" alt="" />\
							</span>\
							<header class="major">\
								<h1>Get Working</h1>\
							</header>\
							<div class="content">\
								<p>Someone who is busier than you is running right now.</p>\
							</div>\
						</div>\
					</section>\
\
				<!-- Main -->\
					<div id="main">\
\
						<!-- One -->\
							<section id="one">\
								<div class="inner">\
									<header class="major">\
										<h2>Insert Muscle Name Here</h2>\
									</header>\
									<p>Insert some descrition of muscle here</p>\
								</div>\
							</section>\
\
						<!-- Two -->\
							<section id="two" class="spotlights">\
								<section>\
									<a href="/ex1" class="image">\
										<img src="images/pic08.jpg" alt="" data-position="center center" />\
									</a>\
									<div class="content">\
										<div class="inner">\
											<header class="major">\												<h3>Insert EXCERCISE 1 here</h3>\
											</header>\											<p>Insert EXERCISE 1 description here. Click learn more to see full excercise list</p>\											<ul class="actions">\
												<li><a href="/ex1" class="button">Learn more</a></li>\
											</ul>\
										</div>\
									</div>\
								</section>\
								<section>\
									<a href="/ex2" class="image">\
										<img src="images/pic09.jpg" alt="" data-position="top center" />\
									</a>\
									<div class="content">\
										<div class="inner">\
											<header class="major">\
												<h3>Insert EXCERCISE 2 here</h3>\
											</header>\
											<p>Insert EXERCISE 2 description here. Click learn more to see full excercise list</p>\
											<ul class="actions">\
												<li><a href="/ex2" class="button">Learn more</a></li>\
											</ul>\
										</div>\
									</div>\
								</section>\
								<section>\
									<a href="/ex3" class="image">\
										<img src="images/pic09.jpg" alt="" data-position="top center" />\
									</a>\
									<div class="content">\
										<div class="inner">\
											<header class="major">\
												<h3>Insert EXCERCISE 3 here</h3>\
											</header>\
											<p>Insert EXERCISE 3 description here. Click learn more to see full excercise list</p>\
											<ul class="actions">\
												<li><a href="/ex3" class="button">Learn more</a></li>\
											</ul>\
										</div>\
									</div>\
								</section>\
							</section>\
\
						<!-- Three -->\
							<section id="three">\
								<div class="inner">\
									<header class="major">\
										<h2>Navigate to Muscle Page</h2>\
									</header>\
									<p>Click learn more to know about the exercises</p>\
									<ul class="actions">\
										<li><a href="/all" class="button next">Get Started</a></li>\
									</ul>\
								</div>\
							</section>\
\
					</div>\
\
				<!-- Footer -->\
					<footer id="footer">\
						<div class="inner">\
							<ul class="icons">\
								\
								<li><a href="#" class="icon alt fa-facebook"><span class="label">Facebook</span></a></li></br>								\
								<li><a href="#" class="icon alt fa-github"><span class="label">GitHub</span></a></li></br>\
								<li><a href="#" class="icon alt fa-linkedin"><span class="label">LinkedIn</span></a></li></br>\
							</ul>\
							<ul class="copyright">\
								<li>&copy; GETFIT</li><li>Design: Amit Bhattarai</a></li>\
							</ul>\
						</div>\
					</footer>\
\
			</div>\
\
		<!-- Scripts -->\
			<script src="jscript.js"></script>\
			<script src="assets/js/jquery.min.js"></script>\
			<script src="assets/js/jquery.scrolly.min.js"></script>\
			<script src="assets/js/jquery.scrollex.min.js"></script>\
			<script src="assets/js/skel.min.js"></script>\
			<script src="assets/js/util.js"></script>\
			<!--[if lte IE 8]><script src="assets/js/ie/respond.min.js"></script><![endif]-->\
			<script src="assets/js/main.js"></script>\
\
	</body>\
</html>' ;

	
return html;
};

moduleRender.prototype.renderSecond=function(req) {	
		console.log("Received ");
		var html = '<!DOCTYPE HTML>\
\
<html>\
	<head>\
		<title>Description Page</title>\
		<meta charset="utf-8" />\
		<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />\
		<link rel="stylesheet" href="assets/css/main.css" />\
	</head>\
	<body>\
\
		<!-- Wrapper -->\
			<div id="wrapper">\
\
				<!-- Header -->\
					<header id="header">\
						<a href="index.html" class="logo"><strong>GETFIT</strong> <span>by Amit, Fritz, Ashish and Joe</span></a>\
						\
						</header>		\
				<!-- Main -->\
					<div id="main">\
						<!-- Two -->\
							<section id="two" class="spotlights">\
								<section>\
									<a href="generic.html" class="image">\
										<img src="images/pic08.jpg" alt="" data-position="center center" />\
									</a>\
									<div class="content">\
										<div class="inner">\
											<header class="major">\
												<h3>Insert EXCERCISE here</h3>\
											</header>\
											<p>Insert EXERCISE description here. </p>\
											<ul class="actions">\
												<li><a href="#" class="button" style="background-color:#FF0000;">YOUTUBE</a></li>\
											</ul>\
										</div>\
									</div>\
								</section>\
							</section>\
\
					</div>\
				<!-- Footer -->\
					<footer id="footer">\
						<div class="inner">\
							<ul class="icons">\
								<li><a href="#" class="icon alt fa-facebook"><span class="label">Facebook</span></a></li></br>\
								<li><a href="#" class="icon alt fa-github"><span class="label">GitHub</span></a></li></br>\
								<li><a href="#" class="icon alt fa-linkedin"><span class="label">LinkedIn</span></a></li></br>\
							</ul>\
							<ul class="copyright">\
								<li>&copy; GETFIT</li><li>Design: Amit Bhattarai</a></li>\
							</ul>\
						</div>\
					</footer>\
\
			</div>\
\
		<!-- Scripts -->\
			<script src="jscript.js"></script>\
			<script src="assets/js/jquery.min.js"></script>\
			<script src="assets/js/jquery.scrolly.min.js"></script>\
			<script src="assets/js/jquery.scrollex.min.js"></script>\
			<script src="assets/js/skel.min.js"></script>\
			<script src="assets/js/util.js"></script>\
			<script src="assets/js/main.js"></script>\
\
	</body>\
</html>' ;

	
return html;
};

moduleRender.prototype.renderThird=function(req) {	
		console.log("Received REQ");
		var html = '<!DOCTYPE HTML>\
\
<html>\
	<head>\
		<title>Description Page</title>\
		<meta charset="utf-8" />\
		<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />\
		<link rel="stylesheet" href="assets/css/main.css" />\
	</head>\
	<body>\
\
		<!-- Wrapper -->\
			<div id="wrapper">\
\
				<!-- Header -->\
					<header id="header">\
						<a href="index.html" class="logo"><strong>GETFIT</strong> <span>by Amit, Fritz, Ashish and Joe</span></a>\
						\
						</header>		\
				<!-- Main -->\
					<div id="main">\
						<!-- Two -->\
							<section id="two" class="spotlights">\
								<section>\
									<a href="/mu1" class="image">\
										<img src="images/pic08.jpg" alt="" data-position="center center" />\
									</a>\
									<div class="content">\
										<div class="inner">\
											<header class="major">\
												<h3>Insert EXCERCISE 1 here</h3>\
											</header>\
											<p>Insert EXERCISE 1 description here. </p>\
											<ul class="actions">\
												<li><a href="/mu1" class="button">Learn More</a></li>\
											</ul>\
										</div>\
									</div>\
								</section>\
								<section>\
									<a href="/mu2" class="image">\
										<img src="images/pic08.jpg" alt="" data-position="center center" />\
									</a>\
									<div class="content">\
										<div class="inner">\
											<header class="major">\
												<h3>Insert EXCERCISE 2 here</h3>\
											</header>\
											<p>Insert EXERCISE 2 description here. </p>\
											<ul class="actions">\
												<li><a href="/mu2" class="button">Learn More</a></li>\
											</ul>\
										</div>\
									</div>\
								</section>\
								<section>\
									<a href="/mu3" class="image">\
										<img src="images/pic08.jpg" alt="" data-position="center center" />\
									</a>\
									<div class="content">\
										<div class="inner">\
											<header class="major">\
												<h3>Insert EXCERCISE 3 here</h3>\
											</header>\
											<p>Insert EXERCISE 3 description here. </p>\
											<ul class="actions">\
												<li><a href="/mu3" class="button">Learn More</a></li>\
											</ul>\
										</div>\
									</div>\
								</section>\
								<section>\
									<a href="/mu4" class="image">\
										<img src="images/pic08.jpg" alt="" data-position="center center" />\
									</a>\
									<div class="content">\
										<div class="inner">\
											<header class="major">\
												<h3>Insert EXCERCISE 4 here</h3>\
											</header>\
											<p>Insert EXERCISE 4 description here. </p>\
											<ul class="actions">\
												<li><a href="/mu4" class="button">Learn More</a></li>\
											</ul>\
										</div>\
									</div>\
								</section>\
								<section>\
									<a href="/mu5" class="image">\
										<img src="images/pic08.jpg" alt="" data-position="center center" />\
									</a>\
									<div class="content">\
										<div class="inner">\
											<header class="major">\
												<h3>Insert EXCERCISE 5 here</h3>\
											</header>\
											<p>Insert EXERCISE 5 description here. </p>\
											<ul class="actions">\
												<li><a href="/mu5" class="button">Learn More</a></li>\
											</ul>\
										</div>\
									</div>\
								</section>\
							</section>\
\
					</div>\
				<!-- Footer -->\
					<footer id="footer">\
						<div class="inner">\
							<ul class="icons">\
								<li><a href="#" class="icon alt fa-facebook"><span class="label">Facebook</span></a></li></br>\
								<li><a href="#" class="icon alt fa-github"><span class="label">GitHub</span></a></li></br>\
								<li><a href="#" class="icon alt fa-linkedin"><span class="label">LinkedIn</span></a></li></br>\
							</ul>\
							<ul class="copyright">\
								<li>&copy; GETFIT</li><li>Design: Amit Bhattarai</a></li>\
							</ul>\
						</div>\
					</footer>\
\
			</div>\
\
		<!-- Scripts -->\
			<script src="jscript.js"></script>\
			<script src="assets/js/jquery.min.js"></script>\
			<script src="assets/js/jquery.scrolly.min.js"></script>\
			<script src="assets/js/jquery.scrollex.min.js"></script>\
			<script src="assets/js/skel.min.js"></script>\
			<script src="assets/js/util.js"></script>\
			<script src="assets/js/main.js"></script>\
\
	</body>\
</html>' ;

	
return html;
};

module.exports = moduleRender;
/*
This is empty on purpose! Your code to build the resume will go here.
 */
var skills = [
              "Java                  Certified Java programmer | web application | web services | desktop app | web scraping  ",
              "Python              Industry experience | web application | data analysis | commandline tool | api",
              "Javascript        Industry experience | web application | jQuery| angularjs | node.js",
              "C++                    Academic projects | multithreads/multicore | information retrival | data communication",
              "Database          SQL | ORM | MySQL | mongodb",
              "Knowledge       Data Structures | OOP Design Patterns | Testing | Computer Networks | Data Science",
            ];
var bio = {"name":"Xingyu Zhou",
           "role":"Software developer & Grad Student in CS",
           "contacts":{
                "email":"ryan.zxy@gmail.com",
                "github":"https://github.com/xingyz",
                "linkedin": '<a href="https://ca.linkedin.com/pub/xingyu-ryan-zhou/46/809/46b" style="text-decoration:none;display:inline"><span style="font: 90% Arial,sans-serif; font-weight:bolder; color:#ffffff;">Xingyu\'s Profile</span></a>',
                "location":"Ottawa, Canada<span style='color:#E05151'>||</span>Chengdu, China",
           },
           "welcome_message":"Interests: Web application development, Machine Learning, Cloud technologies, Distributed databases",
           "skills":skills,
           "biopic":"https://raw.githubusercontent.com/udacity/frontend-nanodegree-resume/master/images/fry.jpg"
          }

var work = {"jobs":[
            {
              "employer":"Datacats",
              "title":"Software Developer",
              "location":"Ottawa,Ontario",
              "dates":"2015.10-2015.12",
              "description":"Datacats uses Python and Docker to reduce the complexivity for the development of Open Data "+
              "Platforms in CKAN. I improved several development tools and libraries, such as an API to "+
              "do bulk data download/upload. I also contributed to the upgrade of data catalogues for <a style='display:inline' href='http://data.surrey.ca/'>City of Surrey </a>"+
              "and <a style='display:inline' href='http://catalogue.data.gov.bc.ca/dataset?download_audience=Public'>Province of British Columbia</a>."
            },
            {
              "employer":"Wordlink",
              "title":"Software Development Intern",
              "location":"Montreal, Quebec",
              "dates":"2014.07-2014.10",
              "description":"I independently developed the frontend and backend frameworks of the Restful news feed app "+
              "of Wordlink, which was selected as part of Cossette Montreal's incubator lab. The stack includes "+
              "node.js, hapi framework, angular.js, bootstrap, masonry",
            }
]};
var education = {"schools":[
                  {"name":"University of Ottawa",
                   "location":"Ottawa,Ontario",
                   "degree":"Master of Computer Science",
                   "GPA":"10/10",
                   "awards":["Admission Scholarship"],
                   "majors":["Computer Science"],
                   "dates":"2015.09-Present",
                   "url":"www.uottawa.ca",
                 },
                 {"name":"Concordia University",
                  "location":"Montreal,Quebec",
                  "degree":"Bachelor of Computer Science",
                  "GPA":"4.13/4.30",
                  "awards":["Graduation with Great Distinction",
                           "Dean's List every year",
                           "Arts and Science Scholar",
                           "Monsignor Andrew Sinal Memorial Scholarship"],
                  "majors":["Honours in Computer Applications"],
                  "minors":["Mathematics & Statistics"],
                  "dates":"2012.09-2015.05",
                  "url":"www.concordia.ca",
                }],
                "onlineCourses":[{
                  "title":"Machine Learning",
                  "school":"Stanford University",
                  "date":""
                }]
               };
 var projects = {
               	"projects": [
               		{
               			"title": "Google Play App Crawling & Analysis Tool",
               			"datesWorked": "January 2014 - April 2014",
               			"description": "Developed a tool to scrape app info from website, exports results to RDF and displays it in GUI. "+
                                   "JSoup for scraping, Jena for RDF creation, JavaFX for GUI",
               			"images": ["https://raw.githubusercontent.com/xingyz/google_app_crawler_analyzer/master/images/Homepage.png",
                               "https://raw.githubusercontent.com/xingyz/google_app_crawler_analyzer/master/images/graph.png"],
               			"url": ""
               		},
               		{
               			"title": "My Command Line Tool",
               			"datesWorked": "October 2015",
               			"description": "Created a cmd tool that supports multiple functions, such as news, weather to kill my time without opening browser. Expect to add more functions.. ",
               			"images": ["https://raw.githubusercontent.com/xingyz/trendlines/master/images/news_screen.png"],
               			"url": ""
               		},
               		{
               			"title": "Flask-theButton",
               			"datesWorked": "September 2015",
               			"description": "Created a small web app when I learnt Flask Framework. It registers " +
                                  "user's click time into database using Sqlalchemy, displays the most up to date info across all browsers using Socketio. ",
               			"images": ["https://raw.githubusercontent.com/xingyz/flask_thebutton/master/images/index.png"],
               			"url": "https://github.com/xingyz/flask_thebutton"
               		},
                  {
               			"title": "Node.js-mypackages",
               			"datesWorked": "September 2014",
               			"description": "Developed a small web app and Rest API to register courier tracking info. I built this  " +
                                  "project to learn the express.js framework of Node.js as well as Mongodb. It uses an external API "+
                                  "to fetch latest tracking info, and parsed it into our document-based database.",
               			"images": ["https://raw.githubusercontent.com/xingyz/node-myPackages/master/images/overview.png",
                              "https://raw.githubusercontent.com/xingyz/node-myPackages/master/images/details.png"],
               			"url": ""
               		}
               	]
 };

var formattedName = HTMLheaderName.replace("%data%",bio.name);
var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcome_message);
var formattedContactInfo = [];
formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github));
formattedContactInfo.push(HTMLlinkedin.replace("%data%", bio.contacts.linkedin));
formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedBioPic);
$("#header").append(formattedWelcomeMsg);

if(bio.skills.length > 0){
  $("#header").append(HTMLskillsStart);

  for(i in bio.skills){
    $("#skills").append(HTMLskills.replace("%data%",bio.skills[i]));
  }
};

for(i in formattedContactInfo){
  $("#topContacts").append(formattedContactInfo[i]);
  $("#footerContacts").append(formattedContactInfo[i]);
}

function displayWork(){
  if(work.jobs.length > 0){
    for(i in work.jobs){
      $("#workExperience").append(HTMLworkStart);
      var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
			var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
			var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
			var formattedDatesWorked = HTMLworkDates.replace("%data%", work.jobs[i].dates);
			var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);

			var formattedEmployerWorkTitle = formattedEmployer + formattedWorkTitle;

			$(".work-entry:last").append(formattedEmployerWorkTitle);
			$(".work-entry:last").append(formattedWorkLocation);
			$(".work-entry:last").append(formattedDatesWorked);
			$(".work-entry:last").append(formattedWorkDescription);
    }
  }
}

education.display = function(){
  if(education.schools.length > 0){
    for(i in education.schools){
      $("#education").append(HTMLschoolStart);
      var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name).replace("#", education.schools[i].url);
      var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
      var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
      var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
      var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors);
      var formattedSchoolGPA = HTMLschoolGPA.replace("%data%", education.schools[i].GPA);

      $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
      $(".education-entry:last").append(formattedSchoolDates);
      $(".education-entry:last").append(formattedSchoolLocation);
      $(".education-entry:last").append(formattedSchoolMajor);
      if("minors" in education.schools[i]){
        var formattedSchoolMinor = HTMLschoolMinor.replace("%data%", education.schools[i].minors);
        $(".education-entry:last").append(formattedSchoolMinor);
      }
      $(".education-entry:last").append(formattedSchoolGPA);
      if("awards" in education.schools[i]){
        $(".education-entry:last").append(HTMLschoolAwardsStart);
        for(j in education.schools[i].awards){
          var formattedSchoolAward = HTMLschoolAward.replace("%data%",education.schools[i].awards[j]);
          $(".awards:last").append(formattedSchoolAward);
        }
      }
    }
  }
}

displayWork();
education.display();

projects.display = function() {
	if(projects.projects.length > 0) {
		for(i in projects.projects) {
			$("#projects").append(HTMLprojectStart);

			var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title).replace("#", projects.projects[i].url);
			var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].datesWorked);
			var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);

			$(".project-entry:last").append(formattedProjectTitle);
			$(".project-entry:last").append(formattedProjectDates);
			$(".project-entry:last").append(formattedProjectDescription);

			for(img in projects.projects[i].images) {
				var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[img]);
				$(".project-entry:last").append(formattedProjectImage);
			}


		}
	}
}

projects.display();

$("#mapDiv").append(googleMap);

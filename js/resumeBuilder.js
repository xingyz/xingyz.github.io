/*
This is empty on purpose! Your code to build the resume will go here.
 */
<<<<<<< HEAD
var skills = ["Python","C++","Java","Web development","Data Science"];
var bio = {"name":"Xingyu Zhou",
           "role":"Software Developer & Graduate Student In CS",
           "contacts":{
                "email":"RYAN.ZXY@GMAIL.COM",
                "github":"perceptronXYZ",
                "mobile":"613-XXX-YYYY",
                "location":"Ottawa, Ontario, Canada",
           },
           "welcome_message":"I currently work as a software developer, and also"+
                             " I am attending uOttawa for my Master's degree in CompSci.",
           "skills":skills,
           "biopic":"https://raw.githubusercontent.com/udacity/frontend-nanodegree-resume/master/images/fry.jpg"
          }

var work = {"jobs":[
            {
              "employer":"Datacats",
              "title":"Software Engineer",
              "location":"Ottawa,Ontario",
              "dates":"2015.10-2015.12",
              "description":"My tasks mainly invovle tools and web development in Python.",
            },
            {
              "employer":"Wordlink",
              "title":"Software Developer",
              "location":"Montreal, Quebec",
              "dates":"2014.07-2014.10",
              "description":"I built a new frontend and backend framework for wordlink.",
            }
]};
var education = {"schools":[
                  {"name":"University of Ottawa",
                   "location":"Ottawa,Ontario",
                   "degree":"Master of Computer Science",
                   "majors":["Computer Science"],
                   "dates":"2015.09-Present",
                   "url":"www.uottawa.ca",
                 },
                 {"name":"Concordia University",
                  "location":"Montreal,Quebec",
                  "degree":"Bachelor of Computer Science",
                  "majors":["Computer Applications"],
                  "minors":["Mathematics & Statistics"],
                  "dates":"2012.09-2015.05",
                  "url":"www.concordiau.ca",
                }],
                "onlineCourses":[{
                  "title":"Machine Learning",
                  "school":"Stanford University",
                  "date":""
                }]
               };

var formattedName = HTMLheaderName.replace("%data%",bio.name);
var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcome_message);
var formattedContactInfo = [];
formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github));
formattedContactInfo.push(HTMLmobile.replace("%data%", bio.contacts.mobile));
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

      $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
      $(".education-entry:last").append(formattedSchoolDates);
      $(".education-entry:last").append(formattedSchoolLocation);
      $(".education-entry:last").append(formattedSchoolMajor);
      if("minors" in education.schools[i])
        var formattedSchoolMinor = HTMLschoolMinor.replace("%data%", education.schools[i].minors);
        $(".education-entry:last").append(formattedSchoolMinor);
    }
  }
}

displayWork();
education.display();

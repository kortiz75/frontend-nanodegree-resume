var bio = {
	"name": "Katrina Ortiz",
	"role": "Front-End Web Developer",
	"welcomeMessage": "blah blah",
	"contacts": {
		"mobile": "954-309-4155",
		"email": "kortiz75@gmail.com",
		"github": "https://github.com/kortiz75",
		"location": "Fort Lauderdale, FL"
	},
	"skills": ["Programming", "JavaScript", "HTML5", "CSS", "Python", "jQuery", "Git"],
	"bioPic": "images/ProfessionalPhoto.jpg"
};

var work = {
	"jobs": [
	{
		"employer": "GlobalOptions",
		"title": "Data Support Services Investigator and Quality Control Editor",
		"location": "Orlando, FL",
		"dates": "04/2012 - Present",
		"description": "Proofreading and Editing: Revised spelling, grammar, format, and content within over 10 reports a day that were auto-populated from investigator notes. Organization: Organized internet search findings into a report with emphasis on fraudulent activities, criminal records, additional employment, and possible evidence of claimants breaking restrictions. Multitasking: Reviewed surveillance videos while matching times and content to the report. Prioritizing Workloads and Meeting Deadlines: Prioritized weekly cases based on due dates and restructured workload to accommodate changing deadlines. Fact Checking: Used claimant background information to conduct thorough searches of Facebook, Twitter, Google, YouTube, LinkedIn, and other internet resources to verify information and uncover fraudulent activities. Collaboration: Worked with investigators to update missing information and clarify notes. Tools: Microsoft Word and Adobe Premiere Pro"
	},
	{
		"employer": "ProofedPositive",
		"title": "Proofreader and Editor",
		"location": "Fort Lauderdale, FL",
		"dates": "12/2008 - Present",
		"description": "Proofreading: Corrected spelling, grammar, and paragraph layout within articles, essays, website content, transcripts, and eBooks in preparation for publication. Attention to Detail: Matched font, formatting, and number style to create consistency within court reporter transcripts. Management and Organization: Started business from the ground up, including creating a website and Facebook page, maintaining accounts receivable spreadsheet, and updating project spreadsheet. Visual Layout: Proofread and organized content and layout within marketing presentation materials. Tools: Microsoft Word Track Changes, PowerPoint, and Excel"
	},
	{
		"employer": "Specialty Group",
		"title": "Administrative Assistant and Billing Associate",
		"location": "Orlando, FL",
		"dates": "01/2010 - 04/2012",
		"description": "Proofreading and Editing: Proofread and edited over 60 reports a month, attached enclosures to reports, and sent finalized reports to clients. Revised and re-categorized time and expense for over 25 adjusters on more than 200 bills a month using in-house system. Collaboration: Matched billed time and expense to reported information and worked with adjusters to clarify incongruent information. Tools: Microsoft Word, Microsoft Outlook, and Adobe Acrobat"
	}
	]
};

var education = {
	"schools": [
	{
		"name": "Udacity",
		"location": "Fort Lauderdale, FL",
		"degree": "Front-End Web Developer Nanodegree",
		"majors": ["Front-End Web Developer"],
		"dates": "07/2015 - Present",
		"url": "https://www.udacity.com/"
	},
	{
		"name": "University of Florida",
		"location": "Gainesville, FL",
		"degree": "Bachelor of Arts",
		"majors": ["English"],
		"dates": "08/2005 - 05/2007",
		"url": "http://www.ufl.edu/"
	},
	{
		"name": "Broward Community College",
		"location": "Davie, FL",
		"degree": "Associate of Arts",
		"majors": ["English"],
		"dates": "08/2003 - 05/2005",
		"url": "http://www.broward.edu/"
	}],
	"onlineCourses": [
	{
		"title": "Python",
		"school": "Codecademy",
		"dates": "06/2015 - 06/2015",
		"url": "https://www.codecademy.com/tracks/python"
	},
	{
		"title": "HTML and CSS",
		"school": "Codecademy",
		"dates": "06/2015 - 06/2015",
		"url": "https://www.codecademy.com/en/tracks/web"
	},
	{
		"title": "JavaScript",
		"school": "Codecademy",
		"dates": "07/2015 - 07/2015",
		"url": "https://www.codecademy.com/en/tracks/javascript"
	},
	{
		"title": "jQuery",
		"school": "Codecademy",
		"dates": "07/2015 - 07/2015",
		"url": "https://www.codecademy.com/tracks/jquery"
	},
	{
		"title": "Learn the Command Line",
		"school": "Codecademy",
		"dates": "07/2015 - 07/2015",
		"url": "https://www.codecademy.com/courses/learn-the-command-line"
	},
	{
		"title": "Intro to HTML and CSS",
		"school": "Udacity",
		"dates": "07/2015 - 07/2015",
		"url": "https://www.udacity.com/course/viewer#!/c-ud304-nd/l-2617868617/m-2698138588"
	},
	{
		"title": "Responsive Web Design Fundamentals",
		"school": "Udacity",
		"dates": "07/2015 - 07/2015",
		"url": "https://www.udacity.com/course/viewer#!/c-ud893-nd/l-3523969367/m-3551129148"
	},
	{
		"title": "Responsive Images",
		"school": "Udacity",
		"dates": "07/2015 - 07/2015",
		"url": "https://www.udacity.com/course/viewer#!/c-ud882-nd/l-3532609279/m-3916878757"
	},
	{
		"title": "How to Use Git and GitHub",
		"school": "Udacity",
		"dates": "07/2015 - 07/2015",
		"url": "https://www.udacity.com/course/viewer#!/c-ud775-nd/l-2980038599/m-2960778924"
	},
	{
		"title": "JavaScript Basics",
		"school": "Udacity",
		"dates": "07/2015 - 07/2015",
		"url": "https://www.udacity.com/course/viewer#!/c-ud804-nd/l-1946788554/m-2550568535"
	}
	]
};

var projects = {
	"projects": [
	{
		"title": "About Me",
		"dates": "07/2015 - 07/2015",
		"description": "Created a simple About Me page using HTML and CSS",
		"images": ["images/aboutmeimg.jpg", "images/aboutheader.jpg", "images/aboutdetail.jpg"]
	},
	{
		"title": "Portfolio",
		"dates": "07/2015 - Present",
		"description": "Created a portfolio to showcase my projects using HTML and CSS",
		"images": []
	}
	]
};

//Displays bio info
bio.display = function() {
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);

	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	$("#topContacts").append(formattedMobile);
	$("#topContacts").append(formattedEmail);
	$("#topContacts").append(formattedGithub);
	$("#topContacts").append(formattedLocation);
	$("#footerContacts").append(formattedMobile);
	$("#footerContacts").append(formattedEmail);
	$("#footerContacts").append(formattedGithub);
	$("#footerContacts").append(formattedLocation);

	var formattedPic = HTMLbioPic.replace("%data%", bio.bioPic);
	$("#header").append(formattedPic);

	var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	$("#header").append(formattedWelcome);

	if(bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
		for(skill in bio.skills) {
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
			$("#skills").append(formattedSkill);
		};
	};	
}
bio.display();


//Formats and appends work details to page
work.display = function () {
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedJobTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedJobTitle;
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedEmployerTitle);
		$(".work-entry:last").append(formattedDates);
		$(".work-entry:last").append(formattedLocation);
		$(".work-entry:last").append(formattedDescription);
	};
}
work.display();

//Displays formatted projects to projects section
projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedTitle);
		$(".project-entry:last").append(formattedDates);
		$(".project-entry:last").append(formattedDescription);
		
		if (projects.projects[project].images.length > 0) {
			for (img in projects.projects[project].images) {
				var formattedImages = HTMLprojectImage.replace("%data%", projects.projects[project].images[img]);
				$(".project-entry:last").append(formattedImages);
			};
		};
	};
}
projects.display();

//Formats and displays school informaiton
education.display = function() {
	for (school in education.schools) {
		$("#education").append(HTMLschoolStart);
		var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		var formattedNameDegree = formattedName + formattedDegree;
		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
		$(".education-entry:last").append(formattedNameDegree);
		$(".education-entry:last").append(formattedLocation);
		$(".education-entry:last").append(formattedDates);
		$(".education-entry:last").append(formattedMajor);
	};

	$("#education").append(HTMLonlineClasses);

	for (course in education.onlineCourses) {
		$("#education").append(HTMLschoolStart);
		var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
		var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
		var formattedTitleSchool = formattedTitle + formattedSchool;
		var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
		var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
		$(".education-entry:last").append(formattedTitleSchool);
		$(".education-entry:last").append(formattedDates);
		$(".education-entry:last").append(formattedURL);
	};
}
education.display();

//Displays map

$("#mapDiv").append(googleMap);

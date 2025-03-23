function selectSubject(subject) {
    switch (subject.toLowerCase()) {
        case 'math':
            document.write("You selected Mathematics.");
            break;
        case 'science':
            document.write("You selected Science.");
            break;
        case 'history':
            document.write("You selected History.");
            break;
        case 'english':
            document.write("You selected English.");
            break;
        case 'computer science':
            document.write("You selected Computer Science.");
            break;
        default:
            document.write("Invalid selection. Please choose a valid subject.");
    }
}

selectSubject('Computer Science'); 
















function selectSubjects(subject1, subject2) {
    let selectedSubjects = [];

    switch (subject1.toLowerCase()) {
        case 'math':
        case 'science':
        case 'history':
        case 'english':
        case 'computer science':
            selectedSubjects.push(subject1);
            break;
        default:
            console.log(`${subject1} is not a valid subject.`);
    }

    switch (subject2.toLowerCase()) {
        case 'math':
        case 'science':
        case 'history':
        case 'english':
        case 'computer science':
            selectedSubjects.push(subject2);
            break;
        default:
            console.log(`${subject2} is not a valid subject.`);
    }

    if (selectedSubjects.length === 2) {
        console.log(`You selected ${selectedSubjects.join(" and ")}.`);
    }
}

// Example usage
selectSubjects('Math', 'English'); // Output: You selected Math and English.

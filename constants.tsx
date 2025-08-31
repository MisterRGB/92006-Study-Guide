
import React from 'react';
import { Principle, QuizQuestion } from './types';

export const HEURISTICS_DATA: Principle[] = [
  { id: 1, title: "Visibility of system status", description: "The system should always keep users informed about what is going on, through appropriate feedback within reasonable time.", example: "A file upload progress bar showing the percentage complete." },
  { id: 2, title: "Match between system and the real world", description: "The system should speak the user's language, with words, phrases and concepts familiar to the user, rather than system-oriented terms. Follow real-world conventions, making information appear in a natural and logical order.", example: "A trash can icon for deleting files, which behaves like a real-world trash can (you can often retrieve items from it)." },
  { id: 3, title: "User control and freedom", description: "Users often choose system functions by mistake and will need a clearly marked 'emergency exit' to leave the unwanted state without having to go through an extended dialogue. Support undo and redo.", example: "An 'Undo' button after sending an email or an 'edit message' function in a chat app." },
  { id: 4, title: "Consistency and standards", description: "Users should not have to wonder whether different words, situations, or actions mean the same thing. Follow platform conventions.", example: "Using a standard shopping cart icon in the top-right corner of all e-commerce sites." },
  { id: 5, title: "Error prevention", description: "Even better than good error messages is a careful design which prevents a problem from occurring in the first place. Either eliminate error-prone conditions or check for them and present users with a confirmation option before they commit to the action.", example: "A confirmation dialog asking 'Are you sure you want to delete this?' before permanently removing an item." },
  { id: 6, title: "Recognition rather than recall", description: "Minimize the user's memory load by making objects, actions, and options visible. The user should not have to remember information from one part of the dialogue to another. Instructions for use of the system should be visible or easily retrievable whenever appropriate.", example: "Showing 'Recently viewed items' on an e-commerce site, so users don't have to remember what they looked at." },
  { id: 7, title: "Flexibility and efficiency of use", description: "Accelerators — unseen by the novice user — may often speed up the interaction for the expert user such that the system can cater to both inexperienced and experienced users. Allow users to tailor frequent actions.", example: "Keyboard shortcuts like Ctrl+C for copy and Ctrl+V for paste for expert users, while novices can use the 'Edit' menu." },
  { id: 8, title: "Aesthetic and minimalist design", description: "Dialogues should not contain information which is irrelevant or rarely needed. Every extra unit of information in a dialogue competes with the relevant units of information and diminishes their relative visibility.", example: "A clean, uncluttered homepage with only the most essential information and clear calls-to-action." },
  { id: 9, title: "Help users recognize, diagnose, and recover from errors", description: "Error messages should be expressed in plain language (no codes), precisely indicate the problem, and constructively suggest a solution.", example: "An error message that says 'Invalid password. Your password must be at least 8 characters long.' instead of just 'Error'." },
  { id: 10, title: "Help and documentation", description: "Even though it is better if the system can be used without documentation, it may be necessary to provide help and documentation. Any such information should be easy to search, focused on the user's task, list concrete steps to be carried out, and not be too large.", example: "A searchable FAQ section or a '?' icon next to complex features that provides contextual help." }
];

export const MATAPONO_MAORI_DATA: Principle[] = [
    { id: 1, title: "Accurate use of te reo Māori", description: "Ensuring the correct and respectful use of the Māori language in the interface, including support for macrons.", example: "A government website providing a te reo Māori language option that has been verified by a licensed translator." },
    { id: 2, title: "Manaakitanga", description: "Upholding a person's mana, or showing respect for them. This involves creating a welcoming, supportive, and respectful user experience.", example: "A university application portal that provides clear, encouraging guidance and easy access to support contacts, making prospective students feel welcome and valued." },
    { id: 3, title: "Rangatiratanga", description: "The right to exercise authority and self-determination. In a UI context, this means giving users control and autonomy over their data and experience.", example: "Social media privacy settings that give users granular control over who can see their posts and personal information." },
    { id: 4, title: "Whanaungatanga", description: "Building relationships with people. This can be fostered by creating a sense of community, connection, and shared purpose among users.", example: "An online learning platform that includes discussion forums and group project features to help students connect and learn from each other." },
    { id: 5, title: "Aroha", description: "Empathy and compassion for others. Designing with aroha means considering the user's feelings, needs, and potential frustrations, and creating a kind and helpful interface.", example: "An accessibility feature like a 'high contrast' mode on a website, showing compassion for users with visual impairments." },
    { id: 6, title: "Kaitiakitanga", description: "Guardianship and protection of the resources or people entrusted to you. This is highly relevant to data sovereignty and privacy, ensuring user data is protected and used ethically.", example: "A health app that clearly explains how a user's personal health data is stored, protected, and used, assuring them it is in safe hands." },
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    questionText: "A website form shows a vague 'Error #5B' message after submission with no other information. Which heuristic is most clearly violated?",
    options: ["Aesthetic and minimalist design", "Help users recognize, diagnose, and recover from errors", "Consistency and standards", "User control and freedom"],
    correctAnswerIndex: 1,
    explanation: "This violates 'Help users recognize, diagnose, and recover from errors' because the message is a code, not plain language, and it doesn't suggest a solution."
  },
  {
    id: 2,
    questionText: "An application allows expert users to use keyboard shortcuts (e.g., Ctrl+S to save) while new users can use the menu system. What principle does this demonstrate?",
    options: ["Flexibility and efficiency of use", "Error prevention", "Match between system and the real world", "Visibility of system status"],
    correctAnswerIndex: 0,
    explanation: "This is a classic example of 'Flexibility and efficiency of use', as it provides accelerators (shortcuts) for expert users without confusing novices."
  },
  {
    id: 3,
    questionText: "A banking app allows users to set their own daily transfer limits and manage which devices can access their account. Which Mātāpono Māori principle does this best align with?",
    options: ["Manaakitanga", "Whanaungatanga", "Rangatiratanga", "Aroha"],
    correctAnswerIndex: 2,
    explanation: "'Rangatiratanga' is about self-determination and authority. Giving users control over their security and settings is a direct implementation of this principle."
  },
  {
    id: 4,
    questionText: "A website uses very light grey text on a white background, making it difficult for many people to read. Which core usability concept is being ignored?",
    options: ["Internal consistency", "Accessibility", "Minimalist design", "Recognition rather than recall"],
    correctAnswerIndex: 1,
    explanation: "Low contrast between text and background is a major accessibility issue, making content unreadable for users with visual impairments."
  },
  {
    id: 5,
    questionText: "When you are booking a flight, the website shows a progress bar at the top with steps: 'Flights', 'Passengers', 'Extras', 'Payment'. Which heuristic does this address?",
    options: ["Error prevention", "Visibility of system status", "Aesthetic and minimalist design", "Help and documentation"],
    correctAnswerIndex: 1,
    explanation: "The progress bar shows users where they are in the process, which is a key part of 'Visibility of system status'."
  },
  {
    id: 6,
    questionText: "A photo editing app uses a paintbrush icon for the drawing tool and a trash can icon for deleting a photo. This is an example of which heuristic?",
    options: ["Consistency and standards", "Flexibility and efficiency of use", "Match between system and the real world", "Recognition rather than recall"],
    correctAnswerIndex: 2,
    explanation: "Using icons that correspond to real-world objects (paintbrush, trash can) helps users understand their function, which is the core of 'Match between system and the real world'."
  },
  {
    id: 7,
    questionText: "A council services app includes a feature for users to report local issues (like potholes) and see reports from others in their neighbourhood. Which Mātāpono Māori principle does this feature encourage?",
    options: ["Aroha", "Whanaungatanga", "Rangatiratanga", "Kaitiakitanga"],
    correctAnswerIndex: 1,
    explanation: "'Whanaungatanga' is about building community and relationships. A feature that connects neighbours for a shared purpose directly supports this."
  },
  {
    id: 8,
    questionText: "On a ticket booking site, you accidentally select the wrong date. A prominent 'Back' button allows you to easily return to the previous screen and change it. This is an example of:",
    options: ["User control and freedom", "Error prevention", "Help and documentation", "Consistency and standards"],
    correctAnswerIndex: 0,
    explanation: "Providing a clear way to exit an unwanted state and correct mistakes is the essence of 'User control and freedom'."
  },
  {
    id: 9,
    questionText: "In a password creation form, the requirements (e.g., 'must be 8 characters', 'needs a number') are always visible on the screen. This is an example of:",
    options: ["Recall rather than recognition", "Recognition rather than recall", "Flexibility and efficiency of use", "Aesthetic and minimalist design"],
    correctAnswerIndex: 1,
    explanation: "By keeping the instructions visible, the system minimizes the user's memory load. They can 'recognize' the rules rather than having to 'recall' them from memory."
  },
  {
    id: 10,
    questionText: "A weather app provides a large font option and a high-contrast theme for users with visual impairments. This design consideration is a direct application of which Mātāpono Māori principle?",
    options: ["Rangatiratanga", "Aroha", "Whanaungatanga", "Kaitiakitanga"],
    correctAnswerIndex: 1,
    explanation: "'Aroha' is about empathy and compassion. Designing with accessibility in mind shows compassion for users with different needs and abilities."
  },
  {
    id: 11,
    questionText: "A music streaming app places the 'Play/Pause' button in the centre of the screen, while a video streaming app also places it in the centre. This shared design pattern relates to which heuristic?",
    options: ["Consistency and standards", "User control and freedom", "Visibility of system status", "Error prevention"],
    correctAnswerIndex: 0,
    explanation: "Users expect certain elements to be in standard places across different applications. Following these platform and industry conventions is key to 'Consistency and standards'."
  },
  {
    id: 12,
    questionText: "When filling out an address form, the 'City' field is automatically filled in after you enter your postcode. Which heuristic does this clever design support?",
    options: ["Help and documentation", "Flexibility and efficiency of use", "Error prevention", "Aesthetic and minimalist design"],
    correctAnswerIndex: 2,
    explanation: "By auto-filling the city, the system prevents users from misspelling it or entering an incorrect city for that postcode, thus preventing errors."
  },
  {
    id: 13,
    questionText: "A government health website provides clear, concise information about how user data is encrypted and stored, and gives users control over their data sharing preferences. This reflects which Mātāpono Māori principle?",
    options: ["Manaakitanga", "Kaitiakitanga", "Whanaungatanga", "Aroha"],
    correctAnswerIndex: 1,
    explanation: "'Kaitiakitanga' means guardianship. In a digital context, this directly applies to the secure and ethical protection of user data."
  },
  {
    id: 14,
    questionText: "A food delivery app's homepage is filled with distracting pop-ups, auto-playing videos, and dozens of categories, making it hard to find the search bar. Which heuristic is being ignored?",
    options: ["Aesthetic and minimalist design", "Flexibility and efficiency of use", "Visibility of system status", "Help and documentation"],
    correctAnswerIndex: 0,
    explanation: "This interface is cluttered with irrelevant information, which competes for the user's attention. A minimalist design would remove unnecessary elements."
  },
  {
    id: 15,
    questionText: "When you try to enter letters into a phone number field, the system simply doesn't allow it. This is a form of:",
    options: ["Error recovery", "Error prevention", "User control", "System status"],
    correctAnswerIndex: 1,
    explanation: "The design prevents the error from occurring in the first place by constraining the input, which is a highly effective form of 'Error prevention'."
  },
  {
    id: 16,
    questionText: "An online learning platform provides a welcome video and an easy-to-follow 'Getting Started' guide for new users. This shows respect and creates a supportive environment, which aligns with:",
    options: ["Rangatiratanga", "Manaakitanga", "Kaitiakitanga", "Whanaungatanga"],
    correctAnswerIndex: 1,
    explanation: "'Manaakitanga' is about showing respect and hospitality. A warm and helpful onboarding process makes users feel welcome and supported."
  },
  {
    id: 17,
    questionText: "A university website uses different terminology for 'courses', 'papers', and 'subjects' across different pages, causing confusion. This violates:",
    options: ["Consistency and standards", "Flexibility and efficiency of use", "Minimalist design", "Match between system and real world"],
    correctAnswerIndex: 0,
    explanation: "Internal consistency requires using the same terminology and design patterns throughout a single system. This inconsistency violates that standard."
  },
  {
    id: 18,
    questionText: "After you complete a purchase, a confirmation screen appears with your order number and a message saying 'A confirmation email has been sent to you.' This is an example of:",
    options: ["Error prevention", "User control and freedom", "Visibility of system status", "Help and documentation"],
    correctAnswerIndex: 2,
    explanation: "The system is providing immediate feedback that the action was successful and informing the user about the next step (the email), which is a core part of 'Visibility of system status'."
  },
  {
    id: 19,
    questionText: "A complex data analysis tool has a small '?' icon next to each feature. Clicking it opens a small pop-up explaining what that feature does. This addresses which heuristic?",
    options: ["Help and documentation", "Flexibility and efficiency of use", "Error prevention", "Minimalist design"],
    correctAnswerIndex: 0,
    explanation: "This is contextual help, which is an effective way to provide 'Help and documentation' exactly when and where the user needs it."
  },
  {
    id: 20,
    questionText: "A social media site's privacy settings are buried five menus deep and are very difficult to understand. This design fails to give users:",
    options: ["Rangatiratanga (self-determination)", "Whanaungatanga (community)", "Aroha (empathy)", "Manaakitanga (respect)"],
    correctAnswerIndex: 0,
    explanation: "'Rangatiratanga' involves giving users control and authority over their experience and data. Hiding privacy settings undermines this principle."
  }
];


// SVG Icons as React Components

export const BookOpenIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
);

export const LightBulbIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
);

export const QuestionMarkCircleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

export const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

export const XIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export const MagnifyingGlassIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
);

export const CollectionIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
    </svg>
);

## ChangeLog

1. PeopleList
    * PeopleList Component receives people array via props now.
    * Added conditional person.fullname as value to relationship prop when returning <Person />

2. Person
    * Person Component modified to render checkbox is checkbox prop is passed to it
    * Added new styles in Person.module.css to style checkbox

2. Feed
    * Added likes array to state (to be passed as props to PeopleList component via Likes component)

3. Family
    * Family changed to stateful component
    
4. People
    * People changed to stateful component

5. Feeds
    * Added people array to state
    * Added locationList Array to state
    * Added tagOverlay
    * Added locationOverlay
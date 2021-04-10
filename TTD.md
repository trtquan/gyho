# Why TDD?
What have we gained by using outside-in Test-Driven Development?

- Confidence it works. Unit or component tests are great to specify the functionality of functions or classes, but the app can still crash or do the wrong thing when they’re connected together. An end-to-end test confirms that all the pieces connect in the right way.
- Input on our design. Our component test confirms that the way we interact with NewMessageForm is simple. If it was complex, our component test would have been harder to write.
- 100% test coverage. By only writing the minimal code necessary to pass each error, this ensures we don’t have any code that isn’t covered by a test. This avoids the situation where a change we make breaks untested code.
= Minimal code. We’ve built the minimal features that pass our test. This has helped us avoid to speculate on features the code might need in the future, that increase our maintenance cost without adding any benefit.
- Ability to refactor. Because we have 100% test coverage, we can make changes to our code to improve its design to handle future requirements. Our code doesn't develop cruft that makes it complex to work within.
- Ability to ship quickly. We aren't spending time building code our users don't need. When some old code is slowing us down, we can refactor it to make it quicker to work with. And our tests reduce the amount of manual testing we need to do before a release.
# tjchaplin-custom-directive

# Purpose
Show how to publish an Angular directive to bower.  Additional reference: http://bower.io/docs/creating-packages/

# How to register
```
bower register <my-package-name> <git-endpoint>
# for example
$ bower register example git://github.com/user/example.git
```

## To Register in bower
* The package name must adhere to the bower.json spec.
* There must be a valid manifest JSON in the current working directory.
* Your package should use semver Git tags.
* Your package must be publically available at a Git endpoint (e.g., GitHub). Remember to push your Git tags!

# How to remove from register
```
curl -X DELETE "https://bower.herokuapp.com/packages/<package>?access_token=<token>"
```

Where <package> is the package name you want to delete and <token> is GitHub’s Personal Access Token that you can fetch from GitHub settings for applications.
A default GitHub Personal Access Token will work – no permissions necessary.
You need to be an owner or collaborator of the repo and URL needs to be OK.
# Developer API

The developer API is available via nexus.jazzkuh.com. To use it, you need to add it to your pom.xml or build.gradle file:

## Maven
::: details Maven
```xml
    <repository>
        <id>jazzkuh-maven</id>
        <url>https://nexus.jazzkuh.com/repository/public/</url>
    </repository>
```

```xml
	<dependency>
	    <groupId>com.jazzkuh</groupId>
	    <artifactId>Gunshell</artifactId>
	    <version>1.6.1</version>
	</dependency>
```
:::

## Gradle (Kotlin DSL)
::: details Gradle
```kotlin
    repositories {
        maven { url = uri("https://nexus.jazzkuh.com/repository/public/") }
    }
```

```kotlin
    dependencies {
        compileOnly "com.jazzkuh:Gunshell:1.6.1"
    }
```
:::

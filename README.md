# SecretStartups.org Website

This repository contains the source code for the SecretStartups.org website, built using Hugo.

## Prerequisites

- Hugo (Extended Version) v0.92.0 or later
- Git
- Basic command line knowledge

## Setup Instructions

1. Clone the repository:
```bash
git clone [your-repo-url]
cd dev.secretstartups.org
```

2. Initialize and update submodules:
```bash
git submodule init
git submodule update
```

3. Install dependencies:
```bash
# For Ubuntu/Debian
sudo apt update
sudo apt install hugo
```

## Project Structure

```
secretstartups/
├── archetypes/          # Template files for new content
├── assets/             
│   └── css/            # Custom CSS styles
├── content/            # Main content files
│   ├── teams/         # Team member profiles
│   ├── associates/    # Associate profiles
│   ├── handbook/      # Organization handbook
│   ├── about/         # About us section
│   └── legals/        # Legal documentation
├── layouts/            # Custom layouts and shortcodes
├── static/            # Static files (images, etc.)
└── themes/            # Hugo themes
```

## Adding New Content

### Adding a Team Member
```bash
hugo new teams/firstname-lastname.md
```

### Adding an Associate
```bash
hugo new associates/firstname-lastname.md
```

### Adding Videos
Use the custom video shortcode:
```markdown
{{< video platform="youtube" id="VIDEO_ID" >}}
```
or
```markdown
{{< video platform="vimeo" id="VIDEO_ID" >}}
```

## Development

1. Start the development server:
```bash
hugo server -D
```

2. View the site at `http://localhost:1313`

## Taxonomy System

The site uses the following taxonomies:
- Departments (for team members)
- Expertise (for associates)
- Locations
- Collaboration Areas

## Customization

### CSS Customization
Custom styles are located in `assets/css/custom.css`

### Layout Customization
Custom layouts and shortcodes are in the `layouts/` directory

## Deployment

1. Build the site:
```bash
hugo --minify
```

2. The built site will be in the `public/` directory

## Contributing

1. Create a new branch for your changes
2. Make your changes
3. Submit a pull request

## Maintenance

- Regularly update Hugo and theme versions
- Keep content up to date
- Backup your content regularly

## Support

For questions or issues:
1. Check the [Hugo documentation](https://gohugo.io/documentation/)
2. Create an issue in the repository
3. Contact the development team

## License

[Your License Information Here]

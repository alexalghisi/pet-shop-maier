<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Product media lives in a private storage bucket and is served through the `/media/$` server route — workspace blocks public buckets, and SEO needs stable image URLs.
- Products are read via public server functions (publishable client) in route loaders, so product pages render fully for search engines.
- The first account created at /admin automatically gets the admin role (database trigger) — the shop has a single owner.

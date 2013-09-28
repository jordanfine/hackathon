


<!DOCTYPE html>
<html>
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# githubog: http://ogp.me/ns/fb/githubog#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>restangular/dist/restangular.min.js at master · mgonto/restangular</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png" />
    <link rel="logo" type="image/svg" href="https://github-media-downloads.s3.amazonaws.com/github-logo.svg" />
    <meta property="og:image" content="https://github.global.ssl.fastly.net/images/modules/logos_page/Octocat.png">
    <meta name="hostname" content="github-fe119-cp1-prd.iad.github.net">
    <meta name="ruby" content="ruby 1.9.3p194-tcs-github-tcmalloc (2012-05-25, TCS patched 2012-05-27, GitHub v1.0.36) [x86_64-linux]">
    <link rel="assets" href="https://github.global.ssl.fastly.net/">
    <link rel="conduit-xhr" href="https://ghconduit.com:25035/">
    <link rel="xhr-socket" href="/_sockets" />
    


    <meta name="msapplication-TileImage" content="/windows-tile.png" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="selected-link" value="repo_source" data-pjax-transient />
    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="80E30559:2437:73E4F5:52473BD5" name="octolytics-dimension-request_id" /><meta content="1612487" name="octolytics-actor-id" /><meta content="nicktardif" name="octolytics-actor-login" /><meta content="1bbc4c2caaa45dc5bafd3e9ffb07a61f4fe0bbb0511587c27cc197b3642ea8f6" name="octolytics-actor-hash" />
    

    
    
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />

    <meta content="authenticity_token" name="csrf-param" />
<meta content="H/7KNlDzujxVlyyr3go82Sh6I/bp5VSEbSzyBrvc1iU=" name="csrf-token" />

    <link href="https://github.global.ssl.fastly.net/assets/github-4288f026700410ae032b5d324dea2b4571789d7c.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://github.global.ssl.fastly.net/assets/github2-88d5087029dbe346f413843c4cb0149921840ef5.css" media="all" rel="stylesheet" type="text/css" />
    

    

      <script src="https://github.global.ssl.fastly.net/assets/frameworks-4e5aeedcc7a86dcff8294cb84644a333b46202a2.js" type="text/javascript"></script>
      <script src="https://github.global.ssl.fastly.net/assets/github-3eca66e8d84a2ff6e7aa623a998827892eceb472.js" type="text/javascript"></script>
      
      <meta http-equiv="x-pjax-version" content="405a8aa4027641752499b79ebf1cb5a3">

        <link data-pjax-transient rel='permalink' href='/mgonto/restangular/blob/75ff9c8268f979c6086abff2691581fa0c91cd99/dist/restangular.min.js'>
  <meta property="og:title" content="restangular"/>
  <meta property="og:type" content="githubog:gitrepository"/>
  <meta property="og:url" content="https://github.com/mgonto/restangular"/>
  <meta property="og:image" content="https://github.global.ssl.fastly.net/images/gravatars/gravatar-user-420.png"/>
  <meta property="og:site_name" content="GitHub"/>
  <meta property="og:description" content="restangular - AngularJS service to handle Rest API Restful Resources properly and easily"/>

  <meta name="description" content="restangular - AngularJS service to handle Rest API Restful Resources properly and easily" />

  <meta content="723723" name="octolytics-dimension-user_id" /><meta content="mgonto" name="octolytics-dimension-user_login" /><meta content="9210604" name="octolytics-dimension-repository_id" /><meta content="mgonto/restangular" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="9210604" name="octolytics-dimension-repository_network_root_id" /><meta content="mgonto/restangular" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/mgonto/restangular/commits/master.atom" rel="alternate" title="Recent Commits to restangular:master" type="application/atom+xml" />

  </head>


  <body class="logged_in  env-production linux vis-public  page-blob">
    <div class="wrapper">
      
      
      


      <div class="header header-logged-in true">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/">
  <span class="mega-octicon octicon-mark-github"></span>
</a>

    
    <a href="/notifications" class="notification-indicator tooltipped downwards" data-gotokey="n" title="You have no unread notifications">
        <span class="mail-status all-read"></span>
</a>

      <div class="command-bar js-command-bar  in-repository">
          <form accept-charset="UTF-8" action="/search" class="command-bar-form" id="top_search_form" method="get">

<input type="text" data-hotkey=" s" name="q" id="js-command-bar-field" placeholder="Search or type a command" tabindex="1" autocapitalize="off"
    
    data-username="nicktardif"
      data-repo="mgonto/restangular"
      data-branch="master"
      data-sha="2d4d0f9a3a4ce7c1793bac3c03a5cc940b4701ea"
  >

    <input type="hidden" name="nwo" value="mgonto/restangular" />

    <div class="select-menu js-menu-container js-select-menu search-context-select-menu">
      <span class="minibutton select-menu-button js-menu-target">
        <span class="js-select-button">This repository</span>
      </span>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container">
        <div class="select-menu-modal">

          <div class="select-menu-item js-navigation-item js-this-repository-navigation-item selected">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" class="js-search-this-repository" name="search_target" value="repository" checked="checked" />
            <div class="select-menu-item-text js-select-button-text">This repository</div>
          </div> <!-- /.select-menu-item -->

          <div class="select-menu-item js-navigation-item js-all-repositories-navigation-item">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" name="search_target" value="global" />
            <div class="select-menu-item-text js-select-button-text">All repositories</div>
          </div> <!-- /.select-menu-item -->

        </div>
      </div>
    </div>

  <span class="octicon help tooltipped downwards" title="Show command bar help">
    <span class="octicon octicon-question"></span>
  </span>


  <input type="hidden" name="ref" value="cmdform">

</form>
        <ul class="top-nav">
          <li class="explore"><a href="/explore">Explore</a></li>
            <li><a href="https://gist.github.com">Gist</a></li>
            <li><a href="/blog">Blog</a></li>
          <li><a href="https://help.github.com">Help</a></li>
        </ul>
      </div>

    


  <ul id="user-links">
    <li>
      <a href="/nicktardif" class="name">
        <img height="20" src="https://2.gravatar.com/avatar/676d08629bd5c67855aa89f0cf25b746?d=https%3A%2F%2Fidenticons.github.com%2F52ec4ac7d6a1358fbf09c1c80f262103.png&amp;s=140" width="20" /> nicktardif
      </a>
    </li>

      <li>
        <a href="/new" id="new_repo" class="tooltipped downwards" title="Create a new repo" aria-label="Create a new repo">
          <span class="octicon octicon-repo-create"></span>
        </a>
      </li>

      <li>
        <a href="/settings/profile" id="account_settings"
          class="tooltipped downwards"
          aria-label="Account settings "
          title="Account settings ">
          <span class="octicon octicon-tools"></span>
        </a>
      </li>
      <li>
        <a class="tooltipped downwards" href="/logout" data-method="post" id="logout" title="Sign out" aria-label="Sign out">
          <span class="octicon octicon-log-out"></span>
        </a>
      </li>

  </ul>

<div class="js-new-dropdown-contents hidden">
  

<ul class="dropdown-menu">
  <li>
    <a href="/new"><span class="octicon octicon-repo-create"></span> New repository</a>
  </li>
  <li>
    <a href="/organizations/new"><span class="octicon octicon-organization"></span> New organization</a>
  </li>



    <li class="section-title">
      <span title="mgonto/restangular">This repository</span>
    </li>
    <li>
      <a href="/mgonto/restangular/issues/new"><span class="octicon octicon-issue-opened"></span> New issue</a>
    </li>
</ul>

</div>


    
  </div>
</div>

      

      




          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        

<ul class="pagehead-actions">

    <li class="subscription">
      <form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="authenticity_token" type="hidden" value="H/7KNlDzujxVlyyr3go82Sh6I/bp5VSEbSzyBrvc1iU=" /></div>  <input id="repository_id" name="repository_id" type="hidden" value="9210604" />

    <div class="select-menu js-menu-container js-select-menu">
        <a class="social-count js-social-count" href="/mgonto/restangular/watchers">
          98
        </a>
      <span class="minibutton select-menu-button with-count js-menu-target" role="button" tabindex="0">
        <span class="js-select-button">
          <span class="octicon octicon-eye-watch"></span>
          Watch
        </span>
      </span>

      <div class="select-menu-modal-holder">
        <div class="select-menu-modal subscription-menu-modal js-menu-content">
          <div class="select-menu-header">
            <span class="select-menu-title">Notification status</span>
            <span class="octicon octicon-remove-close js-menu-close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-list js-navigation-container" role="menu">

            <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                <h4>Not watching</h4>
                <span class="description">You only receive notifications for discussions in which you participate or are @mentioned.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye-watch"></span>
                  Watch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                <h4>Watching</h4>
                <span class="description">You receive notifications for all discussions in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye-unwatch"></span>
                  Unwatch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_ignore" name="do" type="radio" value="ignore" />
                <h4>Ignoring</h4>
                <span class="description">You do not receive any notifications for discussions in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-mute"></span>
                  Stop ignoring
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

</form>
    </li>

  <li>
  
<div class="js-toggler-container js-social-container starring-container ">
  <a href="/mgonto/restangular/unstar" class="minibutton with-count js-toggler-target star-button starred upwards" title="Unstar this repo" data-remote="true" data-method="post" rel="nofollow">
    <span class="octicon octicon-star-delete"></span><span class="text">Unstar</span>
  </a>
  <a href="/mgonto/restangular/star" class="minibutton with-count js-toggler-target star-button unstarred upwards" title="Star this repo" data-remote="true" data-method="post" rel="nofollow">
    <span class="octicon octicon-star"></span><span class="text">Star</span>
  </a>
  <a class="social-count js-social-count" href="/mgonto/restangular/stargazers">1,566</a>
</div>

  </li>


        <li>
          <a href="/mgonto/restangular/fork" class="minibutton with-count js-toggler-target fork-button lighter upwards" title="Fork this repo" rel="nofollow" data-method="post">
            <span class="octicon octicon-git-branch-create"></span><span class="text">Fork</span>
          </a>
          <a href="/mgonto/restangular/network" class="social-count">138</a>
        </li>


</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="repo-label"><span>public</span></span>
          <span class="mega-octicon octicon-repo"></span>
          <span class="author">
            <a href="/mgonto" class="url fn" itemprop="url" rel="author"><span itemprop="title">mgonto</span></a></span
          ><span class="repohead-name-divider">/</span><strong
          ><a href="/mgonto/restangular" class="js-current-repository js-repo-home-link">restangular</a></strong>

          <span class="page-context-loader">
            <img alt="Octocat-spinner-32" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">

      <div class="repository-with-sidebar repo-container ">

        <div class="repository-sidebar">
            

<div class="repo-nav repo-nav-full js-repository-container-pjax js-octicon-loaders">
  <div class="repo-nav-contents">
    <ul class="repo-menu">
      <li class="tooltipped leftwards" title="Code">
        <a href="/mgonto/restangular" aria-label="Code" class="js-selected-navigation-item selected" data-gotokey="c" data-pjax="true" data-selected-links="repo_source repo_downloads repo_commits repo_tags repo_branches /mgonto/restangular">
          <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

        <li class="tooltipped leftwards" title="Issues">
          <a href="/mgonto/restangular/issues" aria-label="Issues" class="js-selected-navigation-item js-disable-pjax" data-gotokey="i" data-selected-links="repo_issues /mgonto/restangular/issues">
            <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
            <span class='counter'>17</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>

      <li class="tooltipped leftwards" title="Pull Requests"><a href="/mgonto/restangular/pulls" aria-label="Pull Requests" class="js-selected-navigation-item js-disable-pjax" data-gotokey="p" data-selected-links="repo_pulls /mgonto/restangular/pulls">
            <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
            <span class='counter'>1</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>


        <li class="tooltipped leftwards" title="Wiki">
          <a href="/mgonto/restangular/wiki" aria-label="Wiki" class="js-selected-navigation-item " data-pjax="true" data-selected-links="repo_wiki /mgonto/restangular/wiki">
            <span class="octicon octicon-book"></span> <span class="full-word">Wiki</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>
    </ul>
    <div class="repo-menu-separator"></div>
    <ul class="repo-menu">

      <li class="tooltipped leftwards" title="Pulse">
        <a href="/mgonto/restangular/pulse" aria-label="Pulse" class="js-selected-navigation-item " data-pjax="true" data-selected-links="pulse /mgonto/restangular/pulse">
          <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped leftwards" title="Graphs">
        <a href="/mgonto/restangular/graphs" aria-label="Graphs" class="js-selected-navigation-item " data-pjax="true" data-selected-links="repo_graphs repo_contributors /mgonto/restangular/graphs">
          <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped leftwards" title="Network">
        <a href="/mgonto/restangular/network" aria-label="Network" class="js-selected-navigation-item js-disable-pjax" data-selected-links="repo_network /mgonto/restangular/network">
          <span class="octicon octicon-git-branch"></span> <span class="full-word">Network</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>
    </ul>


  </div>
</div>

            <div class="only-with-full-nav">
              

  

<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><strong>HTTPS</strong> clone URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/mgonto/restangular.git" readonly="readonly">

    <span class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/mgonto/restangular.git" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>

  

<div class="clone-url "
  data-protocol-type="ssh"
  data-url="/users/set_protocol?protocol_selector=ssh&amp;protocol_type=clone">
  <h3><strong>SSH</strong> clone URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="git@github.com:mgonto/restangular.git" readonly="readonly">

    <span class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="git@github.com:mgonto/restangular.git" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>

  

<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><strong>Subversion</strong> checkout URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/mgonto/restangular" readonly="readonly">

    <span class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/mgonto/restangular" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>


<p class="clone-options">You can clone with
      <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>,
      <a href="#" class="js-clone-selector" data-protocol="ssh">SSH</a>,
      or <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>.
  <span class="octicon help tooltipped upwards" title="Get help on which URL is right for you.">
    <a href="https://help.github.com/articles/which-remote-url-should-i-use">
    <span class="octicon octicon-question"></span>
    </a>
  </span>
</p>



              <a href="/mgonto/restangular/archive/master.zip"
                 class="minibutton sidebar-button"
                 title="Download this repository as a zip file"
                 rel="nofollow">
                <span class="octicon octicon-cloud-download"></span>
                Download ZIP
              </a>
            </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          


<!-- blob contrib key: blob_contributors:v21:4bc69ce6bbf2517df6833b2c6c2e3ed7 -->

<p title="This is a placeholder element" class="js-history-link-replace hidden"></p>

<a href="/mgonto/restangular/find/master" data-pjax data-hotkey="t" class="js-show-file-finder" style="display:none">Show File Finder</a>

<div class="file-navigation">
  


<div class="select-menu js-menu-container js-select-menu" >
  <span class="minibutton select-menu-button js-menu-target" data-hotkey="w"
    data-master-branch="master"
    data-ref="master"
    role="button" aria-label="Switch branches or tags" tabindex="0">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax>

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-remove-close js-menu-close"></span>
      </div> <!-- /.select-menu-header -->

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div><!-- /.select-menu-tabs -->
      </div><!-- /.select-menu-filters -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mgonto/restangular/blob/master/dist/restangular.min.js"
                 data-name="master"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="master">master</a>
            </div> <!-- /.select-menu-item -->
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mgonto/restangular/tree/1.1.3/dist/restangular.min.js"
                 data-name="1.1.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="1.1.3">1.1.3</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mgonto/restangular/tree/1.1.2/dist/restangular.min.js"
                 data-name="1.1.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="1.1.2">1.1.2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mgonto/restangular/tree/1.1.1/dist/restangular.min.js"
                 data-name="1.1.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="1.1.1">1.1.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mgonto/restangular/tree/1.1.0/dist/restangular.min.js"
                 data-name="1.1.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="1.1.0">1.1.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mgonto/restangular/tree/1.0.11/dist/restangular.min.js"
                 data-name="1.0.11"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="1.0.11">1.0.11</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mgonto/restangular/tree/1.0.10/dist/restangular.min.js"
                 data-name="1.0.10"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="1.0.10">1.0.10</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mgonto/restangular/tree/1.0.9/dist/restangular.min.js"
                 data-name="1.0.9"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="1.0.9">1.0.9</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mgonto/restangular/tree/1.0.8/dist/restangular.min.js"
                 data-name="1.0.8"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="1.0.8">1.0.8</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mgonto/restangular/tree/1.0.7/dist/restangular.min.js"
                 data-name="1.0.7"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="1.0.7">1.0.7</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mgonto/restangular/tree/1.0.6/dist/restangular.min.js"
                 data-name="1.0.6"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="1.0.6">1.0.6</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mgonto/restangular/tree/1.0.5/dist/restangular.min.js"
                 data-name="1.0.5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="1.0.5">1.0.5</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mgonto/restangular/tree/1.0.4/dist/restangular.min.js"
                 data-name="1.0.4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="1.0.4">1.0.4</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mgonto/restangular/tree/1.0.3/dist/restangular.min.js"
                 data-name="1.0.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="1.0.3">1.0.3</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mgonto/restangular/tree/1.0.2/dist/restangular.min.js"
                 data-name="1.0.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="1.0.2">1.0.2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mgonto/restangular/tree/1.0.1/dist/restangular.min.js"
                 data-name="1.0.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="1.0.1">1.0.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mgonto/restangular/tree/1.0.0/dist/restangular.min.js"
                 data-name="1.0.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="1.0.0">1.0.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mgonto/restangular/tree/0.8.9/dist/restangular.min.js"
                 data-name="0.8.9"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="0.8.9">0.8.9</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mgonto/restangular/tree/0.8.8/dist/restangular.min.js"
                 data-name="0.8.8"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="0.8.8">0.8.8</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mgonto/restangular/tree/0.8.7/dist/restangular.min.js"
                 data-name="0.8.7"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="0.8.7">0.8.7</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mgonto/restangular/tree/0.8.6/dist/restangular.min.js"
                 data-name="0.8.6"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="0.8.6">0.8.6</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mgonto/restangular/tree/0.8.5/dist/restangular.min.js"
                 data-name="0.8.5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="0.8.5">0.8.5</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mgonto/restangular/tree/0.8.4/dist/restangular.min.js"
                 data-name="0.8.4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="0.8.4">0.8.4</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mgonto/restangular/tree/0.8.3/dist/restangular.min.js"
                 data-name="0.8.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="0.8.3">0.8.3</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mgonto/restangular/tree/0.8.2/dist/restangular.min.js"
                 data-name="0.8.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="0.8.2">0.8.2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mgonto/restangular/tree/0.8.1/dist/restangular.min.js"
                 data-name="0.8.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="0.8.1">0.8.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mgonto/restangular/tree/0.8.0/dist/restangular.min.js"
                 data-name="0.8.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="0.8.0">0.8.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mgonto/restangular/tree/0.7.4/dist/restangular.min.js"
                 data-name="0.7.4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="0.7.4">0.7.4</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mgonto/restangular/tree/0.7.3/dist/restangular.min.js"
                 data-name="0.7.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="0.7.3">0.7.3</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mgonto/restangular/tree/0.7.2/dist/restangular.min.js"
                 data-name="0.7.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="0.7.2">0.7.2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mgonto/restangular/tree/0.7.1/dist/restangular.min.js"
                 data-name="0.7.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="0.7.1">0.7.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mgonto/restangular/tree/0.7.0/dist/restangular.min.js"
                 data-name="0.7.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="0.7.0">0.7.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mgonto/restangular/tree/0.6.9/dist/restangular.min.js"
                 data-name="0.6.9"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="0.6.9">0.6.9</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mgonto/restangular/tree/0.6.8/dist/restangular.min.js"
                 data-name="0.6.8"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="0.6.8">0.6.8</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mgonto/restangular/tree/0.6.7/dist/restangular.min.js"
                 data-name="0.6.7"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="0.6.7">0.6.7</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mgonto/restangular/tree/0.6.6/dist/restangular.min.js"
                 data-name="0.6.6"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="0.6.6">0.6.6</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mgonto/restangular/tree/0.6.5/dist/restangular.min.js"
                 data-name="0.6.5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="0.6.5">0.6.5</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mgonto/restangular/tree/0.6.4/dist/restangular.min.js"
                 data-name="0.6.4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="0.6.4">0.6.4</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mgonto/restangular/tree/0.6.3/dist/restangular.min.js"
                 data-name="0.6.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="0.6.3">0.6.3</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mgonto/restangular/tree/0.6.2/dist/restangular.min.js"
                 data-name="0.6.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="0.6.2">0.6.2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mgonto/restangular/tree/0.6.1/dist/restangular.min.js"
                 data-name="0.6.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="0.6.1">0.6.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mgonto/restangular/tree/0.6.0/dist/restangular.min.js"
                 data-name="0.6.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="0.6.0">0.6.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mgonto/restangular/tree/0.5.5/dist/restangular.min.js"
                 data-name="0.5.5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="0.5.5">0.5.5</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mgonto/restangular/tree/0.5.4/dist/restangular.min.js"
                 data-name="0.5.4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="0.5.4">0.5.4</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mgonto/restangular/tree/0.5.3/dist/restangular.min.js"
                 data-name="0.5.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="0.5.3">0.5.3</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mgonto/restangular/tree/0.5.2/dist/restangular.min.js"
                 data-name="0.5.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="0.5.2">0.5.2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mgonto/restangular/tree/0.5.1/dist/restangular.min.js"
                 data-name="0.5.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="0.5.1">0.5.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mgonto/restangular/tree/0.5.0/dist/restangular.min.js"
                 data-name="0.5.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="0.5.0">0.5.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mgonto/restangular/tree/0.4.6/dist/restangular.min.js"
                 data-name="0.4.6"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="0.4.6">0.4.6</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mgonto/restangular/tree/0.4.4/dist/restangular.min.js"
                 data-name="0.4.4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="0.4.4">0.4.4</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mgonto/restangular/tree/0.4.3/dist/restangular.min.js"
                 data-name="0.4.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="0.4.3">0.4.3</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mgonto/restangular/tree/0.4.2/dist/restangular.min.js"
                 data-name="0.4.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="0.4.2">0.4.2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mgonto/restangular/tree/0.4.1/dist/restangular.min.js"
                 data-name="0.4.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="0.4.1">0.4.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mgonto/restangular/tree/0.3.4/dist/restangular.min.js"
                 data-name="0.3.4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="0.3.4">0.3.4</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mgonto/restangular/tree/0.3.3/dist/restangular.min.js"
                 data-name="0.3.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="0.3.3">0.3.3</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mgonto/restangular/tree/0.3.2/dist/restangular.min.js"
                 data-name="0.3.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="0.3.2">0.3.2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mgonto/restangular/tree/0.3.1/dist/restangular.min.js"
                 data-name="0.3.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="0.3.1">0.3.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mgonto/restangular/tree/0.3.0/dist/restangular.min.js"
                 data-name="0.3.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="0.3.0">0.3.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mgonto/restangular/tree/0.2.1/dist/restangular.min.js"
                 data-name="0.2.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="0.2.1">0.2.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mgonto/restangular/tree/0.2.0/dist/restangular.min.js"
                 data-name="0.2.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="0.2.0">0.2.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mgonto/restangular/tree/0.1.1/dist/restangular.min.js"
                 data-name="0.1.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="0.1.1">0.1.1</a>
            </div> <!-- /.select-menu-item -->
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

    </div> <!-- /.select-menu-modal -->
  </div> <!-- /.select-menu-modal-holder -->
</div> <!-- /.select-menu -->

  <div class="breadcrumb">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/mgonto/restangular" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">restangular</span></a></span></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/mgonto/restangular/tree/master/dist" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">dist</span></a></span><span class="separator"> / </span><strong class="final-path">restangular.min.js</strong> <span class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="dist/restangular.min.js" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>



  <div class="commit file-history-tease">
      <img class="main-avatar" height="24" src="https://2.gravatar.com/avatar/476f8170f26e7d20b6fee1714f0a9969?d=https%3A%2F%2Fidenticons.github.com%2F48f5c66df135f4dad0e2ee6b8acede59.png&amp;s=140" width="24" />
      <span class="author"><a href="/mgonto" rel="author">mgonto</a></span>
      <time class="js-relative-date" datetime="2013-08-16T14:34:12-07:00" title="2013-08-16 14:34:12">August 16, 2013</time>
      <div class="commit-title">
          <a href="/mgonto/restangular/commit/8489fbedeb9cd3d0c8d8728964b80c1e32bd97d4" class="message" data-pjax="true" title="1.1.3">1.1.3</a>
      </div>

      <div class="participation">
        <p class="quickstat"><a href="#blob_contributors_box" rel="facebox"><strong>4</strong> contributors</a></p>
            <a class="avatar tooltipped downwards" title="mgonto" href="/mgonto/restangular/commits/master/dist/restangular.min.js?author=mgonto"><img height="20" src="https://2.gravatar.com/avatar/476f8170f26e7d20b6fee1714f0a9969?d=https%3A%2F%2Fidenticons.github.com%2F48f5c66df135f4dad0e2ee6b8acede59.png&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped downwards" title="cboden" href="/mgonto/restangular/commits/master/dist/restangular.min.js?author=cboden"><img height="20" src="https://2.gravatar.com/avatar/e64cdd88cc31a6f8423237f38a0c97eb?d=https%3A%2F%2Fidenticons.github.com%2F3131afceca6549e869b2e93823722c25.png&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped downwards" title="skaterdav85" href="/mgonto/restangular/commits/master/dist/restangular.min.js?author=skaterdav85"><img height="20" src="https://2.gravatar.com/avatar/3ee0127f214793b335a8762acf4b6ab6?d=https%3A%2F%2Fidenticons.github.com%2F6139a9d9930c7b19249107050ad171c2.png&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped downwards" title="pauldijou" href="/mgonto/restangular/commits/master/dist/restangular.min.js?author=pauldijou"><img height="20" src="https://0.gravatar.com/avatar/038efc79abb8a71c69e756b41672aacc?d=https%3A%2F%2Fidenticons.github.com%2F7d3dd6148491566397a412cc624337a5.png&amp;s=140" width="20" /></a>


      </div>
      <div id="blob_contributors_box" style="display:none">
        <h2 class="facebox-header">Users who have contributed to this file</h2>
        <ul class="facebox-user-list">
          <li class="facebox-user-list-item">
            <img height="24" src="https://2.gravatar.com/avatar/476f8170f26e7d20b6fee1714f0a9969?d=https%3A%2F%2Fidenticons.github.com%2F48f5c66df135f4dad0e2ee6b8acede59.png&amp;s=140" width="24" />
            <a href="/mgonto">mgonto</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://2.gravatar.com/avatar/e64cdd88cc31a6f8423237f38a0c97eb?d=https%3A%2F%2Fidenticons.github.com%2F3131afceca6549e869b2e93823722c25.png&amp;s=140" width="24" />
            <a href="/cboden">cboden</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://2.gravatar.com/avatar/3ee0127f214793b335a8762acf4b6ab6?d=https%3A%2F%2Fidenticons.github.com%2F6139a9d9930c7b19249107050ad171c2.png&amp;s=140" width="24" />
            <a href="/skaterdav85">skaterdav85</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://0.gravatar.com/avatar/038efc79abb8a71c69e756b41672aacc?d=https%3A%2F%2Fidenticons.github.com%2F7d3dd6148491566397a412cc624337a5.png&amp;s=140" width="24" />
            <a href="/pauldijou">pauldijou</a>
          </li>
        </ul>
      </div>
  </div>

<div id="files" class="bubble">
  <div class="file">
    <div class="meta">
      <div class="info">
        <span class="icon"><b class="octicon octicon-file-text"></b></span>
        <span class="mode" title="File Mode">file</span>
          <span>8 lines (8 sloc)</span>
        <span>12.475 kb</span>
      </div>
      <div class="actions">
        <div class="button-group">
                <a class="minibutton tooltipped upwards"
                   title="Clicking this button will automatically fork this project so you can edit the file"
                   href="/mgonto/restangular/edit/master/dist/restangular.min.js"
                   data-method="post" rel="nofollow">Edit</a>
          <a href="/mgonto/restangular/raw/master/dist/restangular.min.js" class="button minibutton " id="raw-url">Raw</a>
            <a href="/mgonto/restangular/blame/master/dist/restangular.min.js" class="button minibutton ">Blame</a>
          <a href="/mgonto/restangular/commits/master/dist/restangular.min.js" class="button minibutton " rel="nofollow">History</a>
        </div><!-- /.button-group -->
            <a class="minibutton danger empty-icon tooltipped downwards"
               href="/mgonto/restangular/delete/master/dist/restangular.min.js"
               title="Fork this project and delete file"
               data-method="post" data-test-id="delete-blob-file" rel="nofollow">
            Delete
          </a>
      </div><!-- /.actions -->

    </div>
        <div class="blob-wrapper data type-javascript js-blob-data">
        <table class="file-code file-diff">
          <tr class="file-code-line">
            <td class="blob-line-nums">
              <span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>

            </td>
            <td class="blob-line-code">
                    <div class="highlight"><pre><div class='line' id='LC1'><span class="cm">/**</span></div><div class='line' id='LC2'><span class="cm"> * Restful Resources service for AngularJS apps</span></div><div class='line' id='LC3'><span class="cm"> * @version v1.1.3 - 2013-08-16</span></div><div class='line' id='LC4'><span class="cm"> * @link https://github.com/mgonto/restangular</span></div><div class='line' id='LC5'><span class="cm"> * @author Martin Gontovnikas &lt;martin@gonto.com.ar&gt;</span></div><div class='line' id='LC6'><span class="cm"> * @license MIT License, http://www.opensource.org/licenses/MIT</span></div><div class='line' id='LC7'><span class="cm"> */</span></div><div class='line' id='LC8'><span class="o">!</span><span class="kd">function</span><span class="p">(){</span><span class="kd">var</span> <span class="nx">a</span><span class="o">=</span><span class="nx">angular</span><span class="p">.</span><span class="nx">module</span><span class="p">(</span><span class="s2">&quot;restangular&quot;</span><span class="p">,[]);</span><span class="nx">a</span><span class="p">.</span><span class="nx">provider</span><span class="p">(</span><span class="s2">&quot;Restangular&quot;</span><span class="p">,</span><span class="kd">function</span><span class="p">(){</span><span class="kd">var</span> <span class="nx">a</span><span class="o">=</span><span class="p">{};</span><span class="nx">a</span><span class="p">.</span><span class="nx">init</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">b</span><span class="p">){</span><span class="kd">function</span> <span class="nx">c</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">b</span><span class="p">,</span><span class="nx">c</span><span class="p">,</span><span class="nx">d</span><span class="p">){</span><span class="kd">var</span> <span class="nx">e</span><span class="o">=</span><span class="p">{};</span><span class="k">return</span> <span class="nx">_</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span><span class="nx">_</span><span class="p">.</span><span class="nx">keys</span><span class="p">(</span><span class="nx">d</span><span class="p">),</span><span class="kd">function</span><span class="p">(</span><span class="nx">f</span><span class="p">){</span><span class="kd">var</span> <span class="nx">g</span><span class="o">=</span><span class="nx">d</span><span class="p">[</span><span class="nx">f</span><span class="p">];</span><span class="nx">g</span><span class="p">.</span><span class="nx">params</span><span class="o">=</span><span class="nx">_</span><span class="p">.</span><span class="nx">extend</span><span class="p">({},</span><span class="nx">g</span><span class="p">.</span><span class="nx">params</span><span class="p">,</span><span class="nx">a</span><span class="p">.</span><span class="nx">defaultRequestParams</span><span class="p">[</span><span class="nx">g</span><span class="p">.</span><span class="nx">method</span><span class="p">.</span><span class="nx">toLowerCase</span><span class="p">()]),</span><span class="nx">_</span><span class="p">.</span><span class="nx">isEmpty</span><span class="p">(</span><span class="nx">g</span><span class="p">.</span><span class="nx">params</span><span class="p">)</span><span class="o">&amp;&amp;</span><span class="k">delete</span> <span class="nx">g</span><span class="p">.</span><span class="nx">params</span><span class="p">,</span><span class="nx">e</span><span class="p">[</span><span class="nx">f</span><span class="p">]</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">isSafe</span><span class="p">(</span><span class="nx">g</span><span class="p">.</span><span class="nx">method</span><span class="p">)</span><span class="o">?</span><span class="kd">function</span><span class="p">(){</span><span class="k">return</span> <span class="nx">b</span><span class="p">(</span><span class="nx">_</span><span class="p">.</span><span class="nx">extend</span><span class="p">(</span><span class="nx">g</span><span class="p">,{</span><span class="nx">url</span><span class="o">:</span><span class="nx">c</span><span class="p">}))}</span><span class="o">:</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="k">return</span> <span class="nx">b</span><span class="p">(</span><span class="nx">_</span><span class="p">.</span><span class="nx">extend</span><span class="p">(</span><span class="nx">g</span><span class="p">,{</span><span class="nx">url</span><span class="o">:</span><span class="nx">c</span><span class="p">,</span><span class="nx">data</span><span class="o">:</span><span class="nx">a</span><span class="p">}))}}),</span><span class="nx">e</span><span class="p">}</span><span class="kd">var</span> <span class="nx">d</span><span class="o">=</span><span class="p">[</span><span class="s2">&quot;get&quot;</span><span class="p">,</span><span class="s2">&quot;head&quot;</span><span class="p">,</span><span class="s2">&quot;options&quot;</span><span class="p">,</span><span class="s2">&quot;trace&quot;</span><span class="p">];</span><span class="nx">b</span><span class="p">.</span><span class="nx">isSafe</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="k">return</span> <span class="nx">_</span><span class="p">.</span><span class="nx">contains</span><span class="p">(</span><span class="nx">d</span><span class="p">,</span><span class="nx">a</span><span class="p">.</span><span class="nx">toLowerCase</span><span class="p">())};</span><span class="kd">var</span> <span class="nx">e</span><span class="o">=</span><span class="sr">/^https?:\/\//i</span><span class="p">;</span><span class="nx">b</span><span class="p">.</span><span class="nx">isAbsoluteUrl</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="k">return</span> <span class="nx">a</span><span class="o">&amp;&amp;</span><span class="nx">e</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">a</span><span class="p">)},</span><span class="nx">b</span><span class="p">.</span><span class="nx">baseUrl</span><span class="o">=</span><span class="nx">_</span><span class="p">.</span><span class="nx">isUndefined</span><span class="p">(</span><span class="nx">b</span><span class="p">.</span><span class="nx">baseUrl</span><span class="p">)</span><span class="o">?</span><span class="s2">&quot;&quot;</span><span class="o">:</span><span class="nx">b</span><span class="p">.</span><span class="nx">baseUrl</span><span class="p">,</span><span class="nx">a</span><span class="p">.</span><span class="nx">setBaseUrl</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="nx">b</span><span class="p">.</span><span class="nx">baseUrl</span><span class="o">=</span><span class="s2">&quot;/&quot;</span><span class="o">===</span><span class="nx">_</span><span class="p">.</span><span class="nx">last</span><span class="p">(</span><span class="nx">a</span><span class="p">)</span><span class="o">?</span><span class="nx">_</span><span class="p">.</span><span class="nx">initial</span><span class="p">(</span><span class="nx">a</span><span class="p">).</span><span class="nx">join</span><span class="p">(</span><span class="s2">&quot;&quot;</span><span class="p">)</span><span class="o">:</span><span class="nx">a</span><span class="p">},</span><span class="nx">b</span><span class="p">.</span><span class="nx">extraFields</span><span class="o">=</span><span class="nx">b</span><span class="p">.</span><span class="nx">extraFields</span><span class="o">||</span><span class="p">[],</span><span class="nx">a</span><span class="p">.</span><span class="nx">setExtraFields</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="nx">b</span><span class="p">.</span><span class="nx">extraFields</span><span class="o">=</span><span class="nx">a</span><span class="p">},</span><span class="nx">b</span><span class="p">.</span><span class="nx">defaultHttpFields</span><span class="o">=</span><span class="nx">b</span><span class="p">.</span><span class="nx">defaultHttpFields</span><span class="o">||</span><span class="p">{},</span><span class="nx">a</span><span class="p">.</span><span class="nx">setDefaultHttpFields</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="nx">b</span><span class="p">.</span><span class="nx">defaultHttpFields</span><span class="o">=</span><span class="nx">a</span><span class="p">},</span><span class="nx">b</span><span class="p">.</span><span class="nx">withHttpDefaults</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="k">return</span> <span class="nx">_</span><span class="p">.</span><span class="nx">defaults</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">b</span><span class="p">.</span><span class="nx">defaultHttpFields</span><span class="p">)},</span><span class="nx">b</span><span class="p">.</span><span class="nx">defaultRequestParams</span><span class="o">=</span><span class="nx">b</span><span class="p">.</span><span class="nx">defaultRequestParams</span><span class="o">||</span><span class="p">{</span><span class="nx">get</span><span class="o">:</span><span class="p">{},</span><span class="nx">post</span><span class="o">:</span><span class="p">{},</span><span class="nx">put</span><span class="o">:</span><span class="p">{},</span><span class="nx">remove</span><span class="o">:</span><span class="p">{},</span><span class="nx">common</span><span class="o">:</span><span class="p">{}},</span><span class="nx">a</span><span class="p">.</span><span class="nx">setDefaultRequestParams</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="nx">b</span><span class="p">.</span><span class="nx">defaultRequestParams</span><span class="p">.</span><span class="nx">common</span><span class="o">=</span><span class="nx">a</span><span class="p">},</span><span class="nx">a</span><span class="p">.</span><span class="nx">requestParams</span><span class="o">=</span><span class="nx">b</span><span class="p">.</span><span class="nx">defaultRequestParams</span><span class="p">,</span><span class="nx">b</span><span class="p">.</span><span class="nx">defaultHeaders</span><span class="o">=</span><span class="nx">b</span><span class="p">.</span><span class="nx">defaultHeaders</span><span class="o">||</span><span class="p">{},</span><span class="nx">a</span><span class="p">.</span><span class="nx">setDefaultHeaders</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">c</span><span class="p">){</span><span class="nx">b</span><span class="p">.</span><span class="nx">defaultHeaders</span><span class="o">=</span><span class="nx">c</span><span class="p">,</span><span class="nx">a</span><span class="p">.</span><span class="nx">defaultHeaders</span><span class="o">=</span><span class="nx">b</span><span class="p">.</span><span class="nx">defaultHeaders</span><span class="p">},</span><span class="nx">a</span><span class="p">.</span><span class="nx">defaultHeaders</span><span class="o">=</span><span class="nx">b</span><span class="p">.</span><span class="nx">defaultHeaders</span><span class="p">,</span><span class="nx">b</span><span class="p">.</span><span class="nx">methodOverriders</span><span class="o">=</span><span class="nx">b</span><span class="p">.</span><span class="nx">methodOverriders</span><span class="o">||</span><span class="p">[],</span><span class="nx">a</span><span class="p">.</span><span class="nx">setMethodOverriders</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="kd">var</span> <span class="nx">c</span><span class="o">=</span><span class="nx">_</span><span class="p">.</span><span class="nx">extend</span><span class="p">([],</span><span class="nx">a</span><span class="p">);</span><span class="nx">b</span><span class="p">.</span><span class="nx">isOverridenMethod</span><span class="p">(</span><span class="s2">&quot;delete&quot;</span><span class="p">,</span><span class="nx">c</span><span class="p">)</span><span class="o">&amp;&amp;</span><span class="nx">c</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="s2">&quot;remove&quot;</span><span class="p">),</span><span class="nx">b</span><span class="p">.</span><span class="nx">methodOverriders</span><span class="o">=</span><span class="nx">c</span><span class="p">},</span><span class="nx">b</span><span class="p">.</span><span class="nx">isOverridenMethod</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">c</span><span class="p">){</span><span class="kd">var</span> <span class="nx">d</span><span class="o">=</span><span class="nx">c</span><span class="o">||</span><span class="nx">b</span><span class="p">.</span><span class="nx">methodOverriders</span><span class="p">;</span><span class="k">return</span><span class="o">!</span><span class="nx">_</span><span class="p">.</span><span class="nx">isUndefined</span><span class="p">(</span><span class="nx">_</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="nx">d</span><span class="p">,</span><span class="kd">function</span><span class="p">(</span><span class="nx">b</span><span class="p">){</span><span class="k">return</span> <span class="nx">b</span><span class="p">.</span><span class="nx">toLowerCase</span><span class="p">()</span><span class="o">===</span><span class="nx">a</span><span class="p">.</span><span class="nx">toLowerCase</span><span class="p">()}))},</span><span class="nx">b</span><span class="p">.</span><span class="nx">urlCreator</span><span class="o">=</span><span class="nx">b</span><span class="p">.</span><span class="nx">urlCreator</span><span class="o">||</span><span class="s2">&quot;path&quot;</span><span class="p">,</span><span class="nx">a</span><span class="p">.</span><span class="nx">setUrlCreator</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="nx">_</span><span class="p">.</span><span class="nx">has</span><span class="p">(</span><span class="nx">b</span><span class="p">.</span><span class="nx">urlCreatorFactory</span><span class="p">,</span><span class="nx">a</span><span class="p">))</span><span class="k">throw</span> <span class="k">new</span> <span class="nb">Error</span><span class="p">(</span><span class="s2">&quot;URL Path selected isn&#39;t valid&quot;</span><span class="p">);</span><span class="nx">b</span><span class="p">.</span><span class="nx">urlCreator</span><span class="o">=</span><span class="nx">a</span><span class="p">},</span><span class="nx">b</span><span class="p">.</span><span class="nx">restangularFields</span><span class="o">=</span><span class="nx">b</span><span class="p">.</span><span class="nx">restangularFields</span><span class="o">||</span><span class="p">{</span><span class="nx">id</span><span class="o">:</span><span class="s2">&quot;id&quot;</span><span class="p">,</span><span class="nx">route</span><span class="o">:</span><span class="s2">&quot;route&quot;</span><span class="p">,</span><span class="nx">parentResource</span><span class="o">:</span><span class="s2">&quot;parentResource&quot;</span><span class="p">,</span><span class="nx">restangularCollection</span><span class="o">:</span><span class="s2">&quot;restangularCollection&quot;</span><span class="p">,</span><span class="nx">cannonicalId</span><span class="o">:</span><span class="s2">&quot;__cannonicalId&quot;</span><span class="p">,</span><span class="nx">etag</span><span class="o">:</span><span class="s2">&quot;restangularEtag&quot;</span><span class="p">,</span><span class="nx">selfLink</span><span class="o">:</span><span class="s2">&quot;href&quot;</span><span class="p">},</span><span class="nx">a</span><span class="p">.</span><span class="nx">setRestangularFields</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="nx">b</span><span class="p">.</span><span class="nx">restangularFields</span><span class="o">=</span><span class="nx">_</span><span class="p">.</span><span class="nx">extend</span><span class="p">(</span><span class="nx">b</span><span class="p">.</span><span class="nx">restangularFields</span><span class="p">,</span><span class="nx">a</span><span class="p">)},</span><span class="nx">b</span><span class="p">.</span><span class="nx">setFieldToElem</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">b</span><span class="p">,</span><span class="nx">c</span><span class="p">){</span><span class="kd">var</span> <span class="nx">d</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">split</span><span class="p">(</span><span class="s2">&quot;.&quot;</span><span class="p">),</span><span class="nx">e</span><span class="o">=</span><span class="nx">b</span><span class="p">;</span><span class="nx">_</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span><span class="nx">_</span><span class="p">.</span><span class="nx">initial</span><span class="p">(</span><span class="nx">d</span><span class="p">),</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="nx">e</span><span class="p">[</span><span class="nx">a</span><span class="p">]</span><span class="o">=</span><span class="p">{},</span><span class="nx">e</span><span class="o">=</span><span class="nx">e</span><span class="p">[</span><span class="nx">a</span><span class="p">]}),</span><span class="nx">e</span><span class="p">[</span><span class="nx">_</span><span class="p">.</span><span class="nx">last</span><span class="p">(</span><span class="nx">d</span><span class="p">)]</span><span class="o">=</span><span class="nx">c</span><span class="p">},</span><span class="nx">b</span><span class="p">.</span><span class="nx">getFieldFromElem</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">b</span><span class="p">){</span><span class="kd">var</span> <span class="nx">c</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">split</span><span class="p">(</span><span class="s2">&quot;.&quot;</span><span class="p">),</span><span class="nx">d</span><span class="o">=</span><span class="nx">angular</span><span class="p">.</span><span class="nx">copy</span><span class="p">(</span><span class="nx">b</span><span class="p">);</span><span class="k">return</span> <span class="nx">_</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span><span class="nx">c</span><span class="p">,</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="nx">d</span><span class="o">=</span><span class="nx">d</span><span class="p">[</span><span class="nx">a</span><span class="p">]}),</span><span class="nx">d</span><span class="p">},</span><span class="nx">b</span><span class="p">.</span><span class="nx">setIdToElem</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">c</span><span class="p">){</span><span class="nx">b</span><span class="p">.</span><span class="nx">setFieldToElem</span><span class="p">(</span><span class="nx">b</span><span class="p">.</span><span class="nx">restangularFields</span><span class="p">.</span><span class="nx">id</span><span class="p">,</span><span class="nx">a</span><span class="p">,</span><span class="nx">c</span><span class="p">)},</span><span class="nx">b</span><span class="p">.</span><span class="nx">getIdFromElem</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="k">return</span> <span class="nx">b</span><span class="p">.</span><span class="nx">getFieldFromElem</span><span class="p">(</span><span class="nx">b</span><span class="p">.</span><span class="nx">restangularFields</span><span class="p">.</span><span class="nx">id</span><span class="p">,</span><span class="nx">a</span><span class="p">)},</span><span class="nx">b</span><span class="p">.</span><span class="nx">isValidId</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="k">return</span><span class="s2">&quot;&quot;</span><span class="o">!==</span><span class="nx">a</span><span class="o">&amp;&amp;!</span><span class="nx">_</span><span class="p">.</span><span class="nx">isUndefined</span><span class="p">(</span><span class="nx">a</span><span class="p">)</span><span class="o">&amp;&amp;!</span><span class="nx">_</span><span class="p">.</span><span class="nx">isNull</span><span class="p">(</span><span class="nx">a</span><span class="p">)},</span><span class="nx">b</span><span class="p">.</span><span class="nx">setUrlToElem</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">c</span><span class="p">){</span><span class="nx">b</span><span class="p">.</span><span class="nx">setFieldToElem</span><span class="p">(</span><span class="nx">b</span><span class="p">.</span><span class="nx">restangularFields</span><span class="p">.</span><span class="nx">selfLink</span><span class="p">,</span><span class="nx">a</span><span class="p">,</span><span class="nx">c</span><span class="p">)},</span><span class="nx">b</span><span class="p">.</span><span class="nx">getUrlFromElem</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="k">return</span> <span class="nx">b</span><span class="p">.</span><span class="nx">getFieldFromElem</span><span class="p">(</span><span class="nx">b</span><span class="p">.</span><span class="nx">restangularFields</span><span class="p">.</span><span class="nx">selfLink</span><span class="p">,</span><span class="nx">a</span><span class="p">)},</span><span class="nx">b</span><span class="p">.</span><span class="nx">useCannonicalId</span><span class="o">=</span><span class="nx">_</span><span class="p">.</span><span class="nx">isUndefined</span><span class="p">(</span><span class="nx">b</span><span class="p">.</span><span class="nx">useCannonicalId</span><span class="p">)</span><span class="o">?!</span><span class="mi">1</span><span class="o">:</span><span class="nx">b</span><span class="p">.</span><span class="nx">useCannonicalId</span><span class="p">,</span><span class="nx">a</span><span class="p">.</span><span class="nx">setUseCannonicalId</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="nx">b</span><span class="p">.</span><span class="nx">useCannonicalId</span><span class="o">=</span><span class="nx">a</span><span class="p">},</span><span class="nx">b</span><span class="p">.</span><span class="nx">getCannonicalIdFromElem</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="kd">var</span> <span class="nx">c</span><span class="o">=</span><span class="nx">a</span><span class="p">[</span><span class="nx">b</span><span class="p">.</span><span class="nx">restangularFields</span><span class="p">.</span><span class="nx">cannonicalId</span><span class="p">],</span><span class="nx">d</span><span class="o">=</span><span class="nx">b</span><span class="p">.</span><span class="nx">isValidId</span><span class="p">(</span><span class="nx">c</span><span class="p">)</span><span class="o">?</span><span class="nx">c</span><span class="o">:</span><span class="nx">b</span><span class="p">.</span><span class="nx">getIdFromElem</span><span class="p">(</span><span class="nx">a</span><span class="p">);</span><span class="k">return</span> <span class="nx">d</span><span class="p">},</span><span class="nx">b</span><span class="p">.</span><span class="nx">responseExtractor</span><span class="o">=</span><span class="nx">b</span><span class="p">.</span><span class="nx">responseExtractor</span><span class="o">||</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="k">return</span> <span class="nx">a</span><span class="p">},</span><span class="nx">a</span><span class="p">.</span><span class="nx">setResponseExtractor</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="nx">b</span><span class="p">.</span><span class="nx">responseExtractor</span><span class="o">=</span><span class="nx">a</span><span class="p">},</span><span class="nx">a</span><span class="p">.</span><span class="nx">setResponseInterceptor</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">setResponseExtractor</span><span class="p">,</span><span class="nx">b</span><span class="p">.</span><span class="nx">fullRequestInterceptor</span><span class="o">=</span><span class="nx">b</span><span class="p">.</span><span class="nx">fullRequestInterceptor</span><span class="o">||</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">b</span><span class="p">,</span><span class="nx">c</span><span class="p">,</span><span class="nx">d</span><span class="p">,</span><span class="nx">e</span><span class="p">,</span><span class="nx">f</span><span class="p">){</span><span class="k">return</span><span class="p">{</span><span class="nx">element</span><span class="o">:</span><span class="nx">a</span><span class="p">,</span><span class="nx">headers</span><span class="o">:</span><span class="nx">e</span><span class="p">,</span><span class="nx">params</span><span class="o">:</span><span class="nx">f</span><span class="p">}},</span><span class="nx">a</span><span class="p">.</span><span class="nx">setRequestInterceptor</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="nx">b</span><span class="p">.</span><span class="nx">fullRequestInterceptor</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">b</span><span class="p">,</span><span class="nx">c</span><span class="p">,</span><span class="nx">d</span><span class="p">,</span><span class="nx">e</span><span class="p">,</span><span class="nx">f</span><span class="p">,</span><span class="nx">g</span><span class="p">){</span><span class="k">return</span><span class="p">{</span><span class="nx">headers</span><span class="o">:</span><span class="nx">f</span><span class="p">,</span><span class="nx">params</span><span class="o">:</span><span class="nx">g</span><span class="p">,</span><span class="nx">element</span><span class="o">:</span><span class="nx">a</span><span class="p">(</span><span class="nx">b</span><span class="p">,</span><span class="nx">c</span><span class="p">,</span><span class="nx">d</span><span class="p">,</span><span class="nx">e</span><span class="p">)}}},</span><span class="nx">a</span><span class="p">.</span><span class="nx">setFullRequestInterceptor</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="nx">b</span><span class="p">.</span><span class="nx">fullRequestInterceptor</span><span class="o">=</span><span class="nx">a</span><span class="p">},</span><span class="nx">b</span><span class="p">.</span><span class="nx">errorInterceptor</span><span class="o">=</span><span class="nx">b</span><span class="p">.</span><span class="nx">errorInterceptor</span><span class="o">||</span><span class="kd">function</span><span class="p">(){},</span><span class="nx">a</span><span class="p">.</span><span class="nx">setErrorInterceptor</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="nx">b</span><span class="p">.</span><span class="nx">errorInterceptor</span><span class="o">=</span><span class="nx">a</span><span class="p">},</span><span class="nx">b</span><span class="p">.</span><span class="nx">onBeforeElemRestangularized</span><span class="o">=</span><span class="nx">b</span><span class="p">.</span><span class="nx">onBeforeElemRestangularized</span><span class="o">||</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="k">return</span> <span class="nx">a</span><span class="p">},</span><span class="nx">a</span><span class="p">.</span><span class="nx">setOnBeforeElemRestangularized</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="nx">b</span><span class="p">.</span><span class="nx">onBeforeElemRestangularized</span><span class="o">=</span><span class="nx">a</span><span class="p">},</span><span class="nx">b</span><span class="p">.</span><span class="nx">onElemRestangularized</span><span class="o">=</span><span class="nx">b</span><span class="p">.</span><span class="nx">onElemRestangularized</span><span class="o">||</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="k">return</span> <span class="nx">a</span><span class="p">},</span><span class="nx">a</span><span class="p">.</span><span class="nx">setOnElemRestangularized</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="nx">b</span><span class="p">.</span><span class="nx">onElemRestangularized</span><span class="o">=</span><span class="nx">a</span><span class="p">},</span><span class="nx">a</span><span class="p">.</span><span class="nx">setListTypeIsArray</span><span class="o">=</span><span class="kd">function</span><span class="p">(){},</span><span class="nx">b</span><span class="p">.</span><span class="nx">shouldSaveParent</span><span class="o">=</span><span class="nx">b</span><span class="p">.</span><span class="nx">shouldSaveParent</span><span class="o">||</span><span class="kd">function</span><span class="p">(){</span><span class="k">return</span><span class="o">!</span><span class="mi">0</span><span class="p">},</span><span class="nx">a</span><span class="p">.</span><span class="nx">setParentless</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="nx">_</span><span class="p">.</span><span class="nx">isArray</span><span class="p">(</span><span class="nx">a</span><span class="p">)</span><span class="o">?</span><span class="nx">b</span><span class="p">.</span><span class="nx">shouldSaveParent</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">b</span><span class="p">){</span><span class="k">return</span><span class="o">!</span><span class="nx">_</span><span class="p">.</span><span class="nx">contains</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">b</span><span class="p">)}</span><span class="o">:</span><span class="nx">_</span><span class="p">.</span><span class="nx">isBoolean</span><span class="p">(</span><span class="nx">a</span><span class="p">)</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="nx">b</span><span class="p">.</span><span class="nx">shouldSaveParent</span><span class="o">=</span><span class="kd">function</span><span class="p">(){</span><span class="k">return</span><span class="o">!</span><span class="nx">a</span><span class="p">})},</span><span class="nx">b</span><span class="p">.</span><span class="nx">suffix</span><span class="o">=</span><span class="nx">_</span><span class="p">.</span><span class="nx">isUndefined</span><span class="p">(</span><span class="nx">b</span><span class="p">.</span><span class="nx">suffix</span><span class="p">)</span><span class="o">?</span><span class="kc">null</span><span class="o">:</span><span class="nx">b</span><span class="p">.</span><span class="nx">suffix</span><span class="p">,</span><span class="nx">a</span><span class="p">.</span><span class="nx">setRequestSuffix</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="nx">b</span><span class="p">.</span><span class="nx">suffix</span><span class="o">=</span><span class="nx">a</span><span class="p">},</span><span class="nx">b</span><span class="p">.</span><span class="nx">transformers</span><span class="o">=</span><span class="nx">b</span><span class="p">.</span><span class="nx">transformers</span><span class="o">||</span><span class="p">{},</span><span class="nx">a</span><span class="p">.</span><span class="nx">addElementTransformer</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">c</span><span class="p">,</span><span class="nx">d</span><span class="p">){</span><span class="kd">var</span> <span class="nx">e</span><span class="o">=</span><span class="kc">null</span><span class="p">,</span><span class="nx">f</span><span class="o">=</span><span class="kc">null</span><span class="p">;</span><span class="mi">2</span><span class="o">===</span><span class="nx">arguments</span><span class="p">.</span><span class="nx">length</span><span class="o">?</span><span class="nx">f</span><span class="o">=</span><span class="nx">c</span><span class="o">:</span><span class="p">(</span><span class="nx">f</span><span class="o">=</span><span class="nx">d</span><span class="p">,</span><span class="nx">e</span><span class="o">=</span><span class="nx">c</span><span class="p">);</span><span class="kd">var</span> <span class="nx">g</span><span class="o">=</span><span class="nx">b</span><span class="p">.</span><span class="nx">transformers</span><span class="p">[</span><span class="nx">a</span><span class="p">];</span><span class="nx">g</span><span class="o">||</span><span class="p">(</span><span class="nx">g</span><span class="o">=</span><span class="nx">b</span><span class="p">.</span><span class="nx">transformers</span><span class="p">[</span><span class="nx">a</span><span class="p">]</span><span class="o">=</span><span class="p">[]),</span><span class="nx">g</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">b</span><span class="p">){</span><span class="k">return</span> <span class="nx">_</span><span class="p">.</span><span class="nx">isNull</span><span class="p">(</span><span class="nx">e</span><span class="p">)</span><span class="o">||</span><span class="nx">a</span><span class="o">==</span><span class="nx">e</span><span class="o">?</span><span class="nx">f</span><span class="p">(</span><span class="nx">b</span><span class="p">)</span><span class="o">:</span><span class="nx">b</span><span class="p">})},</span><span class="nx">a</span><span class="p">.</span><span class="nx">extendCollection</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">b</span><span class="p">,</span><span class="nx">c</span><span class="p">){</span><span class="k">return</span> <span class="nx">a</span><span class="p">.</span><span class="nx">addElementTransformer</span><span class="p">(</span><span class="nx">b</span><span class="p">,</span><span class="o">!</span><span class="mi">0</span><span class="p">,</span><span class="nx">c</span><span class="p">)},</span><span class="nx">a</span><span class="p">.</span><span class="nx">extendModel</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">b</span><span class="p">,</span><span class="nx">c</span><span class="p">){</span><span class="k">return</span> <span class="nx">a</span><span class="p">.</span><span class="nx">addElementTransformer</span><span class="p">(</span><span class="nx">b</span><span class="p">,</span><span class="o">!</span><span class="mi">1</span><span class="p">,</span><span class="nx">c</span><span class="p">)},</span><span class="nx">b</span><span class="p">.</span><span class="nx">transformElem</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">c</span><span class="p">,</span><span class="nx">d</span><span class="p">,</span><span class="nx">e</span><span class="p">){</span><span class="kd">var</span> <span class="nx">f</span><span class="o">=</span><span class="nx">b</span><span class="p">.</span><span class="nx">transformers</span><span class="p">[</span><span class="nx">d</span><span class="p">],</span><span class="nx">g</span><span class="o">=</span><span class="nx">a</span><span class="p">;</span><span class="k">return</span> <span class="nx">f</span><span class="o">&amp;&amp;</span><span class="nx">_</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span><span class="nx">f</span><span class="p">,</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="nx">g</span><span class="o">=</span><span class="nx">a</span><span class="p">(</span><span class="nx">c</span><span class="p">,</span><span class="nx">g</span><span class="p">)}),</span><span class="nx">b</span><span class="p">.</span><span class="nx">onElemRestangularized</span><span class="p">(</span><span class="nx">g</span><span class="p">,</span><span class="nx">c</span><span class="p">,</span><span class="nx">d</span><span class="p">,</span><span class="nx">e</span><span class="p">)},</span><span class="nx">b</span><span class="p">.</span><span class="nx">fullResponse</span><span class="o">=</span><span class="nx">_</span><span class="p">.</span><span class="nx">isUndefined</span><span class="p">(</span><span class="nx">b</span><span class="p">.</span><span class="nx">fullResponse</span><span class="p">)</span><span class="o">?!</span><span class="mi">1</span><span class="o">:</span><span class="nx">b</span><span class="p">.</span><span class="nx">fullResponse</span><span class="p">,</span><span class="nx">a</span><span class="p">.</span><span class="nx">setFullResponse</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="nx">b</span><span class="p">.</span><span class="nx">fullResponse</span><span class="o">=</span><span class="nx">a</span><span class="p">},</span><span class="nx">b</span><span class="p">.</span><span class="nx">urlCreatorFactory</span><span class="o">=</span><span class="p">{};</span><span class="kd">var</span> <span class="nx">f</span><span class="o">=</span><span class="kd">function</span><span class="p">(){};</span><span class="nx">f</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">setConfig</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="k">this</span><span class="p">.</span><span class="nx">config</span><span class="o">=</span><span class="nx">a</span><span class="p">},</span><span class="nx">f</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">parentsArray</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="k">for</span><span class="p">(</span><span class="kd">var</span> <span class="nx">b</span><span class="o">=</span><span class="p">[];</span><span class="nx">a</span><span class="p">;)</span><span class="nx">b</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">a</span><span class="p">),</span><span class="nx">a</span><span class="o">=</span><span class="nx">a</span><span class="p">[</span><span class="k">this</span><span class="p">.</span><span class="nx">config</span><span class="p">.</span><span class="nx">restangularFields</span><span class="p">.</span><span class="nx">parentResource</span><span class="p">];</span><span class="k">return</span> <span class="nx">b</span><span class="p">.</span><span class="nx">reverse</span><span class="p">()},</span><span class="nx">f</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">resource</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">b</span><span class="p">,</span><span class="nx">d</span><span class="p">,</span><span class="nx">e</span><span class="p">,</span><span class="nx">f</span><span class="p">,</span><span class="nx">g</span><span class="p">){</span><span class="kd">var</span> <span class="nx">h</span><span class="o">=</span><span class="nx">_</span><span class="p">.</span><span class="nx">defaults</span><span class="p">(</span><span class="nx">e</span><span class="o">||</span><span class="p">{},</span><span class="k">this</span><span class="p">.</span><span class="nx">config</span><span class="p">.</span><span class="nx">defaultRequestParams</span><span class="p">.</span><span class="nx">common</span><span class="p">),</span><span class="nx">i</span><span class="o">=</span><span class="nx">_</span><span class="p">.</span><span class="nx">defaults</span><span class="p">(</span><span class="nx">d</span><span class="o">||</span><span class="p">{},</span><span class="k">this</span><span class="p">.</span><span class="nx">config</span><span class="p">.</span><span class="nx">defaultHeaders</span><span class="p">);</span><span class="nx">g</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="nx">i</span><span class="p">[</span><span class="s2">&quot;If-None-Match&quot;</span><span class="p">]</span><span class="o">=</span><span class="nx">g</span><span class="p">);</span><span class="kd">var</span> <span class="nx">j</span><span class="o">=</span><span class="k">this</span><span class="p">.</span><span class="nx">base</span><span class="p">(</span><span class="nx">a</span><span class="p">);</span><span class="k">return</span> <span class="nx">j</span><span class="o">+=</span><span class="nx">f</span><span class="o">?</span><span class="s2">&quot;/&quot;</span><span class="o">+</span><span class="nx">f</span><span class="o">:</span><span class="s2">&quot;&quot;</span><span class="p">,</span><span class="nx">j</span><span class="o">+=</span><span class="k">this</span><span class="p">.</span><span class="nx">config</span><span class="p">.</span><span class="nx">suffix</span><span class="o">||</span><span class="s2">&quot;&quot;</span><span class="p">,</span><span class="nx">c</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">config</span><span class="p">,</span><span class="nx">b</span><span class="p">,</span><span class="nx">j</span><span class="p">,{</span><span class="nx">getList</span><span class="o">:</span><span class="k">this</span><span class="p">.</span><span class="nx">config</span><span class="p">.</span><span class="nx">withHttpDefaults</span><span class="p">({</span><span class="nx">method</span><span class="o">:</span><span class="s2">&quot;GET&quot;</span><span class="p">,</span><span class="nx">params</span><span class="o">:</span><span class="nx">h</span><span class="p">,</span><span class="nx">headers</span><span class="o">:</span><span class="nx">i</span><span class="p">}),</span><span class="nx">get</span><span class="o">:</span><span class="k">this</span><span class="p">.</span><span class="nx">config</span><span class="p">.</span><span class="nx">withHttpDefaults</span><span class="p">({</span><span class="nx">method</span><span class="o">:</span><span class="s2">&quot;GET&quot;</span><span class="p">,</span><span class="nx">params</span><span class="o">:</span><span class="nx">h</span><span class="p">,</span><span class="nx">headers</span><span class="o">:</span><span class="nx">i</span><span class="p">}),</span><span class="nx">put</span><span class="o">:</span><span class="k">this</span><span class="p">.</span><span class="nx">config</span><span class="p">.</span><span class="nx">withHttpDefaults</span><span class="p">({</span><span class="nx">method</span><span class="o">:</span><span class="s2">&quot;PUT&quot;</span><span class="p">,</span><span class="nx">params</span><span class="o">:</span><span class="nx">h</span><span class="p">,</span><span class="nx">headers</span><span class="o">:</span><span class="nx">i</span><span class="p">}),</span><span class="nx">post</span><span class="o">:</span><span class="k">this</span><span class="p">.</span><span class="nx">config</span><span class="p">.</span><span class="nx">withHttpDefaults</span><span class="p">({</span><span class="nx">method</span><span class="o">:</span><span class="s2">&quot;POST&quot;</span><span class="p">,</span><span class="nx">params</span><span class="o">:</span><span class="nx">h</span><span class="p">,</span><span class="nx">headers</span><span class="o">:</span><span class="nx">i</span><span class="p">}),</span><span class="nx">remove</span><span class="o">:</span><span class="k">this</span><span class="p">.</span><span class="nx">config</span><span class="p">.</span><span class="nx">withHttpDefaults</span><span class="p">({</span><span class="nx">method</span><span class="o">:</span><span class="s2">&quot;DELETE&quot;</span><span class="p">,</span><span class="nx">params</span><span class="o">:</span><span class="nx">h</span><span class="p">,</span><span class="nx">headers</span><span class="o">:</span><span class="nx">i</span><span class="p">}),</span><span class="nx">head</span><span class="o">:</span><span class="k">this</span><span class="p">.</span><span class="nx">config</span><span class="p">.</span><span class="nx">withHttpDefaults</span><span class="p">({</span><span class="nx">method</span><span class="o">:</span><span class="s2">&quot;HEAD&quot;</span><span class="p">,</span><span class="nx">params</span><span class="o">:</span><span class="nx">h</span><span class="p">,</span><span class="nx">headers</span><span class="o">:</span><span class="nx">i</span><span class="p">}),</span><span class="nx">trace</span><span class="o">:</span><span class="k">this</span><span class="p">.</span><span class="nx">config</span><span class="p">.</span><span class="nx">withHttpDefaults</span><span class="p">({</span><span class="nx">method</span><span class="o">:</span><span class="s2">&quot;TRACE&quot;</span><span class="p">,</span><span class="nx">params</span><span class="o">:</span><span class="nx">h</span><span class="p">,</span><span class="nx">headers</span><span class="o">:</span><span class="nx">i</span><span class="p">}),</span><span class="nx">options</span><span class="o">:</span><span class="k">this</span><span class="p">.</span><span class="nx">config</span><span class="p">.</span><span class="nx">withHttpDefaults</span><span class="p">({</span><span class="nx">method</span><span class="o">:</span><span class="s2">&quot;OPTIONS&quot;</span><span class="p">,</span><span class="nx">params</span><span class="o">:</span><span class="nx">h</span><span class="p">,</span><span class="nx">headers</span><span class="o">:</span><span class="nx">i</span><span class="p">}),</span><span class="nx">patch</span><span class="o">:</span><span class="k">this</span><span class="p">.</span><span class="nx">config</span><span class="p">.</span><span class="nx">withHttpDefaults</span><span class="p">({</span><span class="nx">method</span><span class="o">:</span><span class="s2">&quot;PATCH&quot;</span><span class="p">,</span><span class="nx">params</span><span class="o">:</span><span class="nx">h</span><span class="p">,</span><span class="nx">headers</span><span class="o">:</span><span class="nx">i</span><span class="p">})})};</span><span class="kd">var</span> <span class="nx">g</span><span class="o">=</span><span class="kd">function</span><span class="p">(){};</span><span class="nx">g</span><span class="p">.</span><span class="nx">prototype</span><span class="o">=</span><span class="k">new</span> <span class="nx">f</span><span class="p">,</span><span class="nx">g</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">base</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="kd">var</span> <span class="nx">c</span><span class="o">=</span><span class="k">this</span><span class="p">;</span><span class="k">return</span> <span class="nx">_</span><span class="p">.</span><span class="nx">reduce</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">parentsArray</span><span class="p">(</span><span class="nx">a</span><span class="p">),</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">d</span><span class="p">){</span><span class="kd">var</span> <span class="nx">e</span><span class="p">,</span><span class="nx">f</span><span class="o">=</span><span class="nx">c</span><span class="p">.</span><span class="nx">config</span><span class="p">.</span><span class="nx">getUrlFromElem</span><span class="p">(</span><span class="nx">d</span><span class="p">);</span><span class="k">if</span><span class="p">(</span><span class="nx">f</span><span class="p">){</span><span class="k">if</span><span class="p">(</span><span class="nx">c</span><span class="p">.</span><span class="nx">config</span><span class="p">.</span><span class="nx">isAbsoluteUrl</span><span class="p">(</span><span class="nx">f</span><span class="p">))</span><span class="k">return</span> <span class="nx">f</span><span class="p">;</span><span class="nx">e</span><span class="o">=</span><span class="nx">f</span><span class="p">}</span><span class="k">else</span> <span class="k">if</span><span class="p">(</span><span class="nx">e</span><span class="o">=</span><span class="nx">d</span><span class="p">[</span><span class="nx">c</span><span class="p">.</span><span class="nx">config</span><span class="p">.</span><span class="nx">restangularFields</span><span class="p">.</span><span class="nx">route</span><span class="p">],</span><span class="o">!</span><span class="nx">d</span><span class="p">[</span><span class="nx">c</span><span class="p">.</span><span class="nx">config</span><span class="p">.</span><span class="nx">restangularFields</span><span class="p">.</span><span class="nx">restangularCollection</span><span class="p">]){</span><span class="kd">var</span> <span class="nx">g</span><span class="p">;</span><span class="nx">g</span><span class="o">=</span><span class="nx">c</span><span class="p">.</span><span class="nx">config</span><span class="p">.</span><span class="nx">useCannonicalId</span><span class="o">?</span><span class="nx">c</span><span class="p">.</span><span class="nx">config</span><span class="p">.</span><span class="nx">getCannonicalIdFromElem</span><span class="p">(</span><span class="nx">d</span><span class="p">)</span><span class="o">:</span><span class="nx">c</span><span class="p">.</span><span class="nx">config</span><span class="p">.</span><span class="nx">getIdFromElem</span><span class="p">(</span><span class="nx">d</span><span class="p">),</span><span class="nx">b</span><span class="p">.</span><span class="nx">isValidId</span><span class="p">(</span><span class="nx">g</span><span class="p">)</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="nx">e</span><span class="o">+=</span><span class="s2">&quot;/&quot;</span><span class="o">+</span><span class="nx">g</span><span class="p">)}</span><span class="k">return</span> <span class="nx">a</span><span class="o">+</span><span class="s2">&quot;/&quot;</span><span class="o">+</span><span class="nx">e</span><span class="p">},</span><span class="k">this</span><span class="p">.</span><span class="nx">config</span><span class="p">.</span><span class="nx">baseUrl</span><span class="p">)},</span><span class="nx">g</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">fetchUrl</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">b</span><span class="p">){</span><span class="kd">var</span> <span class="nx">c</span><span class="o">=</span><span class="k">this</span><span class="p">.</span><span class="nx">base</span><span class="p">(</span><span class="nx">a</span><span class="p">);</span><span class="k">return</span> <span class="nx">b</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="nx">c</span><span class="o">+=</span><span class="s2">&quot;/&quot;</span><span class="o">+</span><span class="nx">b</span><span class="p">),</span><span class="nx">c</span><span class="p">},</span><span class="nx">b</span><span class="p">.</span><span class="nx">urlCreatorFactory</span><span class="p">.</span><span class="nx">path</span><span class="o">=</span><span class="nx">g</span><span class="p">};</span><span class="kd">var</span> <span class="nx">b</span><span class="o">=</span><span class="p">{};</span><span class="nx">a</span><span class="p">.</span><span class="nx">init</span><span class="p">(</span><span class="k">this</span><span class="p">,</span><span class="nx">b</span><span class="p">),</span><span class="k">this</span><span class="p">.</span><span class="nx">$get</span><span class="o">=</span><span class="p">[</span><span class="s2">&quot;$http&quot;</span><span class="p">,</span><span class="s2">&quot;$q&quot;</span><span class="p">,</span><span class="kd">function</span><span class="p">(</span><span class="nx">c</span><span class="p">,</span><span class="nx">d</span><span class="p">){</span><span class="kd">function</span> <span class="nx">e</span><span class="p">(</span><span class="nx">f</span><span class="p">){</span><span class="kd">function</span> <span class="nx">g</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">b</span><span class="p">,</span><span class="nx">c</span><span class="p">){</span><span class="k">if</span><span class="p">(</span><span class="nx">b</span><span class="p">[</span><span class="nx">f</span><span class="p">.</span><span class="nx">restangularFields</span><span class="p">.</span><span class="nx">route</span><span class="p">]</span><span class="o">=</span><span class="nx">c</span><span class="p">,</span><span class="nx">b</span><span class="p">.</span><span class="nx">getRestangularUrl</span><span class="o">=</span><span class="nx">_</span><span class="p">.</span><span class="nx">bind</span><span class="p">(</span><span class="nx">K</span><span class="p">.</span><span class="nx">fetchUrl</span><span class="p">,</span><span class="nx">K</span><span class="p">,</span><span class="nx">b</span><span class="p">),</span><span class="nx">b</span><span class="p">.</span><span class="nx">addRestangularMethod</span><span class="o">=</span><span class="nx">_</span><span class="p">.</span><span class="nx">bind</span><span class="p">(</span><span class="nx">H</span><span class="p">,</span><span class="nx">b</span><span class="p">),</span><span class="nx">b</span><span class="p">.</span><span class="nx">one</span><span class="o">=</span><span class="nx">_</span><span class="p">.</span><span class="nx">bind</span><span class="p">(</span><span class="nx">h</span><span class="p">,</span><span class="nx">b</span><span class="p">,</span><span class="nx">b</span><span class="p">),</span><span class="nx">b</span><span class="p">.</span><span class="nx">all</span><span class="o">=</span><span class="nx">_</span><span class="p">.</span><span class="nx">bind</span><span class="p">(</span><span class="nx">i</span><span class="p">,</span><span class="nx">b</span><span class="p">,</span><span class="nx">b</span><span class="p">),</span><span class="nx">b</span><span class="p">.</span><span class="nx">oneUrl</span><span class="o">=</span><span class="nx">_</span><span class="p">.</span><span class="nx">bind</span><span class="p">(</span><span class="nx">j</span><span class="p">,</span><span class="nx">b</span><span class="p">,</span><span class="nx">b</span><span class="p">),</span><span class="nx">b</span><span class="p">.</span><span class="nx">allUrl</span><span class="o">=</span><span class="nx">_</span><span class="p">.</span><span class="nx">bind</span><span class="p">(</span><span class="nx">k</span><span class="p">,</span><span class="nx">b</span><span class="p">,</span><span class="nx">b</span><span class="p">),</span><span class="nx">a</span><span class="o">&amp;&amp;</span><span class="nx">f</span><span class="p">.</span><span class="nx">shouldSaveParent</span><span class="p">(</span><span class="nx">c</span><span class="p">)){</span><span class="kd">var</span> <span class="nx">d</span><span class="o">=</span><span class="nx">f</span><span class="p">.</span><span class="nx">getIdFromElem</span><span class="p">(</span><span class="nx">a</span><span class="p">),</span><span class="nx">e</span><span class="o">=</span><span class="nx">f</span><span class="p">.</span><span class="nx">getUrlFromElem</span><span class="p">(</span><span class="nx">a</span><span class="p">),</span><span class="nx">g</span><span class="o">=</span><span class="nx">_</span><span class="p">.</span><span class="nx">union</span><span class="p">(</span><span class="nx">_</span><span class="p">.</span><span class="nx">values</span><span class="p">(</span><span class="nx">_</span><span class="p">.</span><span class="nx">pick</span><span class="p">(</span><span class="nx">f</span><span class="p">.</span><span class="nx">restangularFields</span><span class="p">,[</span><span class="s2">&quot;route&quot;</span><span class="p">,</span><span class="s2">&quot;parentResource&quot;</span><span class="p">])),</span><span class="nx">f</span><span class="p">.</span><span class="nx">extraFields</span><span class="p">),</span><span class="nx">l</span><span class="o">=</span><span class="nx">_</span><span class="p">.</span><span class="nx">pick</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">g</span><span class="p">);</span><span class="nx">f</span><span class="p">.</span><span class="nx">isValidId</span><span class="p">(</span><span class="nx">d</span><span class="p">)</span><span class="o">&amp;&amp;</span><span class="nx">f</span><span class="p">.</span><span class="nx">setIdToElem</span><span class="p">(</span><span class="nx">l</span><span class="p">,</span><span class="nx">d</span><span class="p">),</span><span class="nx">f</span><span class="p">.</span><span class="nx">isValidId</span><span class="p">(</span><span class="nx">e</span><span class="p">)</span><span class="o">&amp;&amp;</span><span class="nx">f</span><span class="p">.</span><span class="nx">setUrlToElem</span><span class="p">(</span><span class="nx">l</span><span class="p">,</span><span class="nx">e</span><span class="p">),</span><span class="nx">b</span><span class="p">[</span><span class="nx">f</span><span class="p">.</span><span class="nx">restangularFields</span><span class="p">.</span><span class="nx">parentResource</span><span class="p">]</span><span class="o">=</span><span class="nx">l</span><span class="p">}</span><span class="k">else</span> <span class="nx">b</span><span class="p">[</span><span class="nx">f</span><span class="p">.</span><span class="nx">restangularFields</span><span class="p">.</span><span class="nx">parentResource</span><span class="p">]</span><span class="o">=</span><span class="kc">null</span><span class="p">;</span><span class="k">return</span> <span class="nx">b</span><span class="p">}</span><span class="kd">function</span> <span class="nx">h</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">b</span><span class="p">,</span><span class="nx">c</span><span class="p">){</span><span class="kd">var</span> <span class="nx">d</span><span class="o">=</span><span class="p">{};</span><span class="k">return</span> <span class="nx">f</span><span class="p">.</span><span class="nx">setIdToElem</span><span class="p">(</span><span class="nx">d</span><span class="p">,</span><span class="nx">c</span><span class="p">),</span><span class="nx">s</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">d</span><span class="p">,</span><span class="nx">b</span><span class="p">)}</span><span class="kd">function</span> <span class="nx">i</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">b</span><span class="p">){</span><span class="k">return</span> <span class="nx">t</span><span class="p">(</span><span class="nx">a</span><span class="p">,{},</span><span class="nx">b</span><span class="p">,</span><span class="o">!</span><span class="mi">0</span><span class="p">)}</span><span class="kd">function</span> <span class="nx">j</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">b</span><span class="p">,</span><span class="nx">c</span><span class="p">){</span><span class="kd">var</span> <span class="nx">d</span><span class="o">=</span><span class="p">{};</span><span class="k">return</span> <span class="nx">f</span><span class="p">.</span><span class="nx">setUrlToElem</span><span class="p">(</span><span class="nx">d</span><span class="p">,</span><span class="nx">c</span><span class="p">),</span><span class="nx">s</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">d</span><span class="p">,</span><span class="nx">b</span><span class="p">)}</span><span class="kd">function</span> <span class="nx">k</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">b</span><span class="p">,</span><span class="nx">c</span><span class="p">){</span><span class="kd">var</span> <span class="nx">d</span><span class="o">=</span><span class="p">{};</span><span class="k">return</span> <span class="nx">f</span><span class="p">.</span><span class="nx">setUrlToElem</span><span class="p">(</span><span class="nx">d</span><span class="p">,</span><span class="nx">c</span><span class="p">),</span><span class="nx">t</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">d</span><span class="p">,</span><span class="nx">b</span><span class="p">,</span><span class="o">!</span><span class="mi">0</span><span class="p">)}</span><span class="kd">function</span> <span class="nx">l</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">b</span><span class="p">){</span><span class="k">return</span> <span class="nx">a</span><span class="p">.</span><span class="nx">call</span><span class="o">=</span><span class="nx">_</span><span class="p">.</span><span class="nx">bind</span><span class="p">(</span><span class="nx">m</span><span class="p">,</span><span class="nx">a</span><span class="p">),</span><span class="nx">a</span><span class="p">.</span><span class="nx">get</span><span class="o">=</span><span class="nx">_</span><span class="p">.</span><span class="nx">bind</span><span class="p">(</span><span class="nx">n</span><span class="p">,</span><span class="nx">a</span><span class="p">),</span><span class="nx">a</span><span class="p">[</span><span class="nx">f</span><span class="p">.</span><span class="nx">restangularFields</span><span class="p">.</span><span class="nx">restangularCollection</span><span class="p">]</span><span class="o">=</span><span class="nx">b</span><span class="p">,</span><span class="nx">b</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="nx">a</span><span class="p">.</span><span class="nx">push</span><span class="o">=</span><span class="nx">_</span><span class="p">.</span><span class="nx">bind</span><span class="p">(</span><span class="nx">m</span><span class="p">,</span><span class="nx">a</span><span class="p">,</span><span class="s2">&quot;push&quot;</span><span class="p">)),</span><span class="nx">a</span><span class="p">}</span><span class="kd">function</span> <span class="nx">m</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="kd">var</span> <span class="nx">b</span><span class="o">=</span><span class="nx">d</span><span class="p">.</span><span class="nx">defer</span><span class="p">(),</span><span class="nx">c</span><span class="o">=</span><span class="nx">arguments</span><span class="p">;</span><span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">then</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">d</span><span class="p">){</span><span class="kd">var</span> <span class="nx">e</span><span class="o">=</span><span class="nb">Array</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">slice</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">c</span><span class="p">,</span><span class="mi">1</span><span class="p">),</span><span class="nx">f</span><span class="o">=</span><span class="nx">d</span><span class="p">[</span><span class="nx">a</span><span class="p">];</span><span class="nx">f</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="nx">d</span><span class="p">,</span><span class="nx">e</span><span class="p">),</span><span class="nx">b</span><span class="p">.</span><span class="nx">resolve</span><span class="p">(</span><span class="nx">d</span><span class="p">)}),</span><span class="nx">l</span><span class="p">(</span><span class="nx">b</span><span class="p">.</span><span class="nx">promise</span><span class="p">,</span><span class="k">this</span><span class="p">[</span><span class="nx">f</span><span class="p">.</span><span class="nx">restangularFields</span><span class="p">.</span><span class="nx">restangularCollection</span><span class="p">])}</span><span class="kd">function</span> <span class="nx">n</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="kd">var</span> <span class="nx">b</span><span class="o">=</span><span class="nx">d</span><span class="p">.</span><span class="nx">defer</span><span class="p">();</span><span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">then</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">c</span><span class="p">){</span><span class="nx">b</span><span class="p">.</span><span class="nx">resolve</span><span class="p">(</span><span class="nx">c</span><span class="p">[</span><span class="nx">a</span><span class="p">])}),</span><span class="nx">l</span><span class="p">(</span><span class="nx">b</span><span class="p">.</span><span class="nx">promise</span><span class="p">,</span><span class="k">this</span><span class="p">[</span><span class="nx">f</span><span class="p">.</span><span class="nx">restangularFields</span><span class="p">.</span><span class="nx">restangularCollection</span><span class="p">])}</span><span class="kd">function</span> <span class="nx">o</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">b</span><span class="p">,</span><span class="nx">c</span><span class="p">){</span><span class="k">return</span> <span class="nx">f</span><span class="p">.</span><span class="nx">fullResponse</span><span class="o">?</span><span class="nx">a</span><span class="p">.</span><span class="nx">resolve</span><span class="p">(</span><span class="nx">_</span><span class="p">.</span><span class="nx">extend</span><span class="p">(</span><span class="nx">b</span><span class="p">,{</span><span class="nx">data</span><span class="o">:</span><span class="nx">c</span><span class="p">}))</span><span class="o">:</span><span class="p">(</span><span class="nx">a</span><span class="p">.</span><span class="nx">resolve</span><span class="p">(</span><span class="nx">c</span><span class="p">),</span><span class="k">void</span> <span class="mi">0</span><span class="p">)}</span><span class="kd">function</span> <span class="nx">p</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="k">return</span> <span class="nx">_</span><span class="p">.</span><span class="nx">omit</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">_</span><span class="p">.</span><span class="nx">values</span><span class="p">(</span><span class="nx">_</span><span class="p">.</span><span class="nx">omit</span><span class="p">(</span><span class="nx">f</span><span class="p">.</span><span class="nx">restangularFields</span><span class="p">,</span><span class="s2">&quot;id&quot;</span><span class="p">)))}</span><span class="kd">function</span> <span class="nx">q</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="nx">a</span><span class="p">.</span><span class="nx">customOperation</span><span class="o">=</span><span class="nx">_</span><span class="p">.</span><span class="nx">bind</span><span class="p">(</span><span class="nx">G</span><span class="p">,</span><span class="nx">a</span><span class="p">),</span><span class="nx">_</span><span class="p">.</span><span class="nx">each</span><span class="p">([</span><span class="s2">&quot;put&quot;</span><span class="p">,</span><span class="s2">&quot;post&quot;</span><span class="p">,</span><span class="s2">&quot;get&quot;</span><span class="p">,</span><span class="s2">&quot;delete&quot;</span><span class="p">],</span><span class="kd">function</span><span class="p">(</span><span class="nx">b</span><span class="p">){</span><span class="nx">_</span><span class="p">.</span><span class="nx">each</span><span class="p">([</span><span class="s2">&quot;do&quot;</span><span class="p">,</span><span class="s2">&quot;custom&quot;</span><span class="p">],</span><span class="kd">function</span><span class="p">(</span><span class="nx">c</span><span class="p">){</span><span class="kd">var</span> <span class="nx">d</span><span class="p">,</span><span class="nx">e</span><span class="o">=</span><span class="s2">&quot;delete&quot;</span><span class="o">===</span><span class="nx">b</span><span class="o">?</span><span class="s2">&quot;remove&quot;</span><span class="o">:</span><span class="nx">b</span><span class="p">,</span><span class="nx">f</span><span class="o">=</span><span class="nx">c</span><span class="o">+</span><span class="nx">b</span><span class="p">.</span><span class="nx">toUpperCase</span><span class="p">();</span><span class="nx">d</span><span class="o">=</span><span class="s2">&quot;put&quot;</span><span class="o">!==</span><span class="nx">e</span><span class="o">&amp;&amp;</span><span class="s2">&quot;post&quot;</span><span class="o">!==</span><span class="nx">e</span><span class="o">?</span><span class="nx">G</span><span class="o">:</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">b</span><span class="p">,</span><span class="nx">c</span><span class="p">,</span><span class="nx">d</span><span class="p">,</span><span class="nx">e</span><span class="p">){</span><span class="k">return</span> <span class="nx">_</span><span class="p">.</span><span class="nx">bind</span><span class="p">(</span><span class="nx">G</span><span class="p">,</span><span class="k">this</span><span class="p">)(</span><span class="nx">a</span><span class="p">,</span><span class="nx">c</span><span class="p">,</span><span class="nx">d</span><span class="p">,</span><span class="nx">e</span><span class="p">,</span><span class="nx">b</span><span class="p">)},</span><span class="nx">a</span><span class="p">[</span><span class="nx">f</span><span class="p">]</span><span class="o">=</span><span class="nx">_</span><span class="p">.</span><span class="nx">bind</span><span class="p">(</span><span class="nx">d</span><span class="p">,</span><span class="nx">a</span><span class="p">,</span><span class="nx">e</span><span class="p">)})}),</span><span class="nx">a</span><span class="p">.</span><span class="nx">customGETLIST</span><span class="o">=</span><span class="nx">_</span><span class="p">.</span><span class="nx">bind</span><span class="p">(</span><span class="nx">w</span><span class="p">,</span><span class="nx">a</span><span class="p">),</span><span class="nx">a</span><span class="p">.</span><span class="nx">doGETLIST</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">customGETLIST</span><span class="p">}</span><span class="kd">function</span> <span class="nx">r</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="kd">var</span> <span class="nx">b</span><span class="o">=</span><span class="nx">angular</span><span class="p">.</span><span class="nx">copy</span><span class="p">(</span><span class="nx">a</span><span class="p">);</span><span class="k">return</span> <span class="nx">s</span><span class="p">(</span><span class="nx">b</span><span class="p">[</span><span class="nx">f</span><span class="p">.</span><span class="nx">restangularFields</span><span class="p">.</span><span class="nx">parentResource</span><span class="p">],</span><span class="nx">b</span><span class="p">,</span><span class="nx">b</span><span class="p">[</span><span class="nx">f</span><span class="p">.</span><span class="nx">restangularFields</span><span class="p">.</span><span class="nx">route</span><span class="p">])}</span><span class="kd">function</span> <span class="nx">s</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">b</span><span class="p">,</span><span class="nx">c</span><span class="p">){</span><span class="kd">var</span> <span class="nx">d</span><span class="o">=</span><span class="nx">f</span><span class="p">.</span><span class="nx">onBeforeElemRestangularized</span><span class="p">(</span><span class="nx">b</span><span class="p">,</span><span class="o">!</span><span class="mi">1</span><span class="p">,</span><span class="nx">c</span><span class="p">),</span><span class="nx">e</span><span class="o">=</span><span class="nx">g</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">d</span><span class="p">,</span><span class="nx">c</span><span class="p">);</span><span class="k">return</span> <span class="nx">f</span><span class="p">.</span><span class="nx">useCannonicalId</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="nx">e</span><span class="p">[</span><span class="nx">f</span><span class="p">.</span><span class="nx">restangularFields</span><span class="p">.</span><span class="nx">cannonicalId</span><span class="p">]</span><span class="o">=</span><span class="nx">f</span><span class="p">.</span><span class="nx">getIdFromElem</span><span class="p">(</span><span class="nx">e</span><span class="p">)),</span><span class="nx">e</span><span class="p">[</span><span class="nx">f</span><span class="p">.</span><span class="nx">restangularFields</span><span class="p">.</span><span class="nx">restangularCollection</span><span class="p">]</span><span class="o">=!</span><span class="mi">1</span><span class="p">,</span><span class="nx">e</span><span class="p">.</span><span class="nx">get</span><span class="o">=</span><span class="nx">_</span><span class="p">.</span><span class="nx">bind</span><span class="p">(</span><span class="nx">y</span><span class="p">,</span><span class="nx">e</span><span class="p">),</span><span class="nx">e</span><span class="p">.</span><span class="nx">getList</span><span class="o">=</span><span class="nx">_</span><span class="p">.</span><span class="nx">bind</span><span class="p">(</span><span class="nx">w</span><span class="p">,</span><span class="nx">e</span><span class="p">),</span><span class="nx">e</span><span class="p">.</span><span class="nx">put</span><span class="o">=</span><span class="nx">_</span><span class="p">.</span><span class="nx">bind</span><span class="p">(</span><span class="nx">A</span><span class="p">,</span><span class="nx">e</span><span class="p">),</span><span class="nx">e</span><span class="p">.</span><span class="nx">post</span><span class="o">=</span><span class="nx">_</span><span class="p">.</span><span class="nx">bind</span><span class="p">(</span><span class="nx">B</span><span class="p">,</span><span class="nx">e</span><span class="p">),</span><span class="nx">e</span><span class="p">.</span><span class="nx">remove</span><span class="o">=</span><span class="nx">_</span><span class="p">.</span><span class="nx">bind</span><span class="p">(</span><span class="nx">z</span><span class="p">,</span><span class="nx">e</span><span class="p">),</span><span class="nx">e</span><span class="p">.</span><span class="nx">head</span><span class="o">=</span><span class="nx">_</span><span class="p">.</span><span class="nx">bind</span><span class="p">(</span><span class="nx">C</span><span class="p">,</span><span class="nx">e</span><span class="p">),</span><span class="nx">e</span><span class="p">.</span><span class="nx">trace</span><span class="o">=</span><span class="nx">_</span><span class="p">.</span><span class="nx">bind</span><span class="p">(</span><span class="nx">D</span><span class="p">,</span><span class="nx">e</span><span class="p">),</span><span class="nx">e</span><span class="p">.</span><span class="nx">options</span><span class="o">=</span><span class="nx">_</span><span class="p">.</span><span class="nx">bind</span><span class="p">(</span><span class="nx">E</span><span class="p">,</span><span class="nx">e</span><span class="p">),</span><span class="nx">e</span><span class="p">.</span><span class="nx">patch</span><span class="o">=</span><span class="nx">_</span><span class="p">.</span><span class="nx">bind</span><span class="p">(</span><span class="nx">F</span><span class="p">,</span><span class="nx">e</span><span class="p">),</span><span class="nx">q</span><span class="p">(</span><span class="nx">e</span><span class="p">),</span><span class="nx">f</span><span class="p">.</span><span class="nx">transformElem</span><span class="p">(</span><span class="nx">e</span><span class="p">,</span><span class="o">!</span><span class="mi">1</span><span class="p">,</span><span class="nx">c</span><span class="p">,</span><span class="nx">J</span><span class="p">)}</span><span class="kd">function</span> <span class="nx">t</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">b</span><span class="p">,</span><span class="nx">c</span><span class="p">){</span><span class="kd">var</span> <span class="nx">d</span><span class="o">=</span><span class="nx">f</span><span class="p">.</span><span class="nx">onBeforeElemRestangularized</span><span class="p">(</span><span class="nx">b</span><span class="p">,</span><span class="o">!</span><span class="mi">0</span><span class="p">,</span><span class="nx">c</span><span class="p">),</span><span class="nx">e</span><span class="o">=</span><span class="nx">g</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">d</span><span class="p">,</span><span class="nx">c</span><span class="p">);</span><span class="k">return</span> <span class="nx">e</span><span class="p">[</span><span class="nx">f</span><span class="p">.</span><span class="nx">restangularFields</span><span class="p">.</span><span class="nx">restangularCollection</span><span class="p">]</span><span class="o">=!</span><span class="mi">0</span><span class="p">,</span><span class="nx">e</span><span class="p">.</span><span class="nx">post</span><span class="o">=</span><span class="nx">_</span><span class="p">.</span><span class="nx">bind</span><span class="p">(</span><span class="nx">B</span><span class="p">,</span><span class="nx">e</span><span class="p">,</span><span class="kc">null</span><span class="p">),</span><span class="nx">e</span><span class="p">.</span><span class="nx">head</span><span class="o">=</span><span class="nx">_</span><span class="p">.</span><span class="nx">bind</span><span class="p">(</span><span class="nx">C</span><span class="p">,</span><span class="nx">e</span><span class="p">),</span><span class="nx">e</span><span class="p">.</span><span class="nx">trace</span><span class="o">=</span><span class="nx">_</span><span class="p">.</span><span class="nx">bind</span><span class="p">(</span><span class="nx">D</span><span class="p">,</span><span class="nx">e</span><span class="p">),</span><span class="nx">e</span><span class="p">.</span><span class="nx">putElement</span><span class="o">=</span><span class="nx">_</span><span class="p">.</span><span class="nx">bind</span><span class="p">(</span><span class="nx">u</span><span class="p">,</span><span class="nx">e</span><span class="p">),</span><span class="nx">e</span><span class="p">.</span><span class="nx">options</span><span class="o">=</span><span class="nx">_</span><span class="p">.</span><span class="nx">bind</span><span class="p">(</span><span class="nx">E</span><span class="p">,</span><span class="nx">e</span><span class="p">),</span><span class="nx">e</span><span class="p">.</span><span class="nx">patch</span><span class="o">=</span><span class="nx">_</span><span class="p">.</span><span class="nx">bind</span><span class="p">(</span><span class="nx">F</span><span class="p">,</span><span class="nx">e</span><span class="p">),</span><span class="nx">e</span><span class="p">.</span><span class="nx">getList</span><span class="o">=</span><span class="nx">_</span><span class="p">.</span><span class="nx">bind</span><span class="p">(</span><span class="nx">w</span><span class="p">,</span><span class="nx">e</span><span class="p">,</span><span class="kc">null</span><span class="p">),</span><span class="nx">q</span><span class="p">(</span><span class="nx">e</span><span class="p">),</span><span class="nx">f</span><span class="p">.</span><span class="nx">transformElem</span><span class="p">(</span><span class="nx">e</span><span class="p">,</span><span class="o">!</span><span class="mi">0</span><span class="p">,</span><span class="nx">c</span><span class="p">,</span><span class="nx">J</span><span class="p">)}</span><span class="kd">function</span> <span class="nx">u</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">b</span><span class="p">,</span><span class="nx">c</span><span class="p">){</span><span class="kd">var</span> <span class="nx">e</span><span class="o">=</span><span class="k">this</span><span class="p">,</span><span class="nx">f</span><span class="o">=</span><span class="k">this</span><span class="p">[</span><span class="nx">a</span><span class="p">],</span><span class="nx">g</span><span class="o">=</span><span class="nx">d</span><span class="p">.</span><span class="nx">defer</span><span class="p">();</span><span class="k">return</span> <span class="nx">f</span><span class="p">.</span><span class="nx">put</span><span class="p">(</span><span class="nx">b</span><span class="p">,</span><span class="nx">c</span><span class="p">).</span><span class="nx">then</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">b</span><span class="p">){</span><span class="kd">var</span> <span class="nx">c</span><span class="o">=</span><span class="nx">r</span><span class="p">(</span><span class="nx">e</span><span class="p">);</span><span class="nx">c</span><span class="p">[</span><span class="nx">a</span><span class="p">]</span><span class="o">=</span><span class="nx">b</span><span class="p">,</span><span class="nx">g</span><span class="p">.</span><span class="nx">resolve</span><span class="p">(</span><span class="nx">c</span><span class="p">)},</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="nx">g</span><span class="p">.</span><span class="nx">reject</span><span class="p">(</span><span class="nx">a</span><span class="p">)}),</span><span class="nx">l</span><span class="p">(</span><span class="nx">g</span><span class="p">.</span><span class="nx">promise</span><span class="p">,</span><span class="o">!</span><span class="mi">0</span><span class="p">)}</span><span class="kd">function</span> <span class="nx">v</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">b</span><span class="p">,</span><span class="nx">c</span><span class="p">,</span><span class="nx">d</span><span class="p">,</span><span class="nx">e</span><span class="p">,</span><span class="nx">g</span><span class="p">){</span><span class="kd">var</span> <span class="nx">h</span><span class="o">=</span><span class="nx">f</span><span class="p">.</span><span class="nx">responseExtractor</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">b</span><span class="p">,</span><span class="nx">c</span><span class="p">,</span><span class="nx">d</span><span class="p">,</span><span class="nx">e</span><span class="p">,</span><span class="nx">g</span><span class="p">),</span><span class="nx">i</span><span class="o">=</span><span class="nx">e</span><span class="p">.</span><span class="nx">headers</span><span class="p">(</span><span class="s2">&quot;ETag&quot;</span><span class="p">);</span><span class="k">return</span> <span class="nx">h</span><span class="o">&amp;&amp;</span><span class="nx">i</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="nx">h</span><span class="p">[</span><span class="nx">f</span><span class="p">.</span><span class="nx">restangularFields</span><span class="p">.</span><span class="nx">etag</span><span class="p">]</span><span class="o">=</span><span class="nx">i</span><span class="p">),</span><span class="nx">h</span><span class="p">}</span><span class="kd">function</span> <span class="nx">w</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">b</span><span class="p">,</span><span class="nx">e</span><span class="p">){</span><span class="kd">var</span> <span class="nx">g</span><span class="o">=</span><span class="k">this</span><span class="p">,</span><span class="nx">h</span><span class="o">=</span><span class="nx">d</span><span class="p">.</span><span class="nx">defer</span><span class="p">(),</span><span class="nx">i</span><span class="o">=</span><span class="s2">&quot;getList&quot;</span><span class="p">,</span><span class="nx">j</span><span class="o">=</span><span class="nx">K</span><span class="p">.</span><span class="nx">fetchUrl</span><span class="p">(</span><span class="k">this</span><span class="p">,</span><span class="nx">a</span><span class="p">),</span><span class="nx">k</span><span class="o">=</span><span class="nx">a</span><span class="o">||</span><span class="nx">g</span><span class="p">[</span><span class="nx">f</span><span class="p">.</span><span class="nx">restangularFields</span><span class="p">.</span><span class="nx">route</span><span class="p">],</span><span class="nx">m</span><span class="o">=</span><span class="nx">f</span><span class="p">.</span><span class="nx">fullRequestInterceptor</span><span class="p">(</span><span class="kc">null</span><span class="p">,</span><span class="nx">i</span><span class="p">,</span><span class="nx">k</span><span class="p">,</span><span class="nx">j</span><span class="p">,</span><span class="nx">e</span><span class="o">||</span><span class="p">{},</span><span class="nx">b</span><span class="o">||</span><span class="p">{});</span><span class="k">return</span> <span class="nx">K</span><span class="p">.</span><span class="nx">resource</span><span class="p">(</span><span class="k">this</span><span class="p">,</span><span class="nx">c</span><span class="p">,</span><span class="nx">m</span><span class="p">.</span><span class="nx">headers</span><span class="p">,</span><span class="nx">m</span><span class="p">.</span><span class="nx">params</span><span class="p">,</span><span class="nx">a</span><span class="p">,</span><span class="k">this</span><span class="p">[</span><span class="nx">f</span><span class="p">.</span><span class="nx">restangularFields</span><span class="p">.</span><span class="nx">etag</span><span class="p">]).</span><span class="nx">getList</span><span class="p">().</span><span class="nx">then</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">b</span><span class="p">){</span><span class="kd">var</span> <span class="nx">c</span><span class="o">=</span><span class="nx">b</span><span class="p">.</span><span class="nx">data</span><span class="p">,</span><span class="nx">d</span><span class="o">=</span><span class="nx">v</span><span class="p">(</span><span class="nx">c</span><span class="p">,</span><span class="nx">i</span><span class="p">,</span><span class="nx">k</span><span class="p">,</span><span class="nx">j</span><span class="p">,</span><span class="nx">b</span><span class="p">,</span><span class="nx">h</span><span class="p">),</span><span class="nx">e</span><span class="o">=</span><span class="nx">_</span><span class="p">.</span><span class="nx">map</span><span class="p">(</span><span class="nx">d</span><span class="p">,</span><span class="kd">function</span><span class="p">(</span><span class="nx">b</span><span class="p">){</span><span class="k">return</span> <span class="nx">g</span><span class="p">[</span><span class="nx">f</span><span class="p">.</span><span class="nx">restangularFields</span><span class="p">.</span><span class="nx">restangularCollection</span><span class="p">]</span><span class="o">?</span><span class="nx">s</span><span class="p">(</span><span class="nx">g</span><span class="p">[</span><span class="nx">f</span><span class="p">.</span><span class="nx">restangularFields</span><span class="p">.</span><span class="nx">parentResource</span><span class="p">],</span><span class="nx">b</span><span class="p">,</span><span class="nx">g</span><span class="p">[</span><span class="nx">f</span><span class="p">.</span><span class="nx">restangularFields</span><span class="p">.</span><span class="nx">route</span><span class="p">])</span><span class="o">:</span><span class="nx">s</span><span class="p">(</span><span class="nx">g</span><span class="p">,</span><span class="nx">b</span><span class="p">,</span><span class="nx">a</span><span class="p">)});</span><span class="nx">e</span><span class="o">=</span><span class="nx">_</span><span class="p">.</span><span class="nx">extend</span><span class="p">(</span><span class="nx">d</span><span class="p">,</span><span class="nx">e</span><span class="p">),</span><span class="nx">g</span><span class="p">[</span><span class="nx">f</span><span class="p">.</span><span class="nx">restangularFields</span><span class="p">.</span><span class="nx">restangularCollection</span><span class="p">]</span><span class="o">?</span><span class="nx">o</span><span class="p">(</span><span class="nx">h</span><span class="p">,</span><span class="nx">b</span><span class="p">,</span><span class="nx">t</span><span class="p">(</span><span class="kc">null</span><span class="p">,</span><span class="nx">e</span><span class="p">,</span><span class="nx">g</span><span class="p">[</span><span class="nx">f</span><span class="p">.</span><span class="nx">restangularFields</span><span class="p">.</span><span class="nx">route</span><span class="p">]))</span><span class="o">:</span><span class="nx">o</span><span class="p">(</span><span class="nx">h</span><span class="p">,</span><span class="nx">b</span><span class="p">,</span><span class="nx">t</span><span class="p">(</span><span class="nx">g</span><span class="p">,</span><span class="nx">e</span><span class="p">,</span><span class="nx">a</span><span class="p">))},</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="nx">f</span><span class="p">.</span><span class="nx">errorInterceptor</span><span class="p">(</span><span class="nx">a</span><span class="p">)</span><span class="o">!==!</span><span class="mi">1</span><span class="o">&amp;&amp;</span><span class="nx">h</span><span class="p">.</span><span class="nx">reject</span><span class="p">(</span><span class="nx">a</span><span class="p">)}),</span><span class="nx">l</span><span class="p">(</span><span class="nx">h</span><span class="p">.</span><span class="nx">promise</span><span class="p">,</span><span class="o">!</span><span class="mi">0</span><span class="p">)}</span><span class="kd">function</span> <span class="nx">x</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">b</span><span class="p">,</span><span class="nx">e</span><span class="p">,</span><span class="nx">g</span><span class="p">,</span><span class="nx">h</span><span class="p">){</span><span class="kd">var</span> <span class="nx">i</span><span class="o">=</span><span class="k">this</span><span class="p">,</span><span class="nx">j</span><span class="o">=</span><span class="k">this</span><span class="p">[</span><span class="nx">f</span><span class="p">.</span><span class="nx">restangularFields</span><span class="p">.</span><span class="nx">etag</span><span class="p">],</span><span class="nx">k</span><span class="o">=</span><span class="nx">d</span><span class="p">.</span><span class="nx">defer</span><span class="p">(),</span><span class="nx">m</span><span class="o">=</span><span class="nx">e</span><span class="o">||</span><span class="p">{},</span><span class="nx">n</span><span class="o">=</span><span class="nx">b</span><span class="o">||</span><span class="k">this</span><span class="p">[</span><span class="nx">f</span><span class="p">.</span><span class="nx">restangularFields</span><span class="p">.</span><span class="nx">route</span><span class="p">],</span><span class="nx">q</span><span class="o">=</span><span class="nx">K</span><span class="p">.</span><span class="nx">fetchUrl</span><span class="p">(</span><span class="k">this</span><span class="p">,</span><span class="nx">b</span><span class="p">),</span><span class="nx">r</span><span class="o">=</span><span class="nx">g</span><span class="o">||</span><span class="p">(</span><span class="s2">&quot;remove&quot;</span><span class="o">===</span><span class="nx">a</span><span class="o">?</span><span class="k">void</span> <span class="mi">0</span><span class="o">:</span><span class="nx">p</span><span class="p">(</span><span class="k">this</span><span class="p">)),</span><span class="nx">t</span><span class="o">=</span><span class="nx">f</span><span class="p">.</span><span class="nx">fullRequestInterceptor</span><span class="p">(</span><span class="nx">r</span><span class="p">,</span><span class="nx">a</span><span class="p">,</span><span class="nx">n</span><span class="p">,</span><span class="nx">q</span><span class="p">,</span><span class="nx">h</span><span class="o">||</span><span class="p">{},</span><span class="nx">m</span><span class="o">||</span><span class="p">{}),</span><span class="nx">u</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">c</span><span class="p">){</span><span class="kd">var</span> <span class="nx">d</span><span class="o">=</span><span class="nx">c</span><span class="p">.</span><span class="nx">data</span><span class="p">,</span><span class="nx">e</span><span class="o">=</span><span class="nx">v</span><span class="p">(</span><span class="nx">d</span><span class="p">,</span><span class="nx">a</span><span class="p">,</span><span class="nx">n</span><span class="p">,</span><span class="nx">q</span><span class="p">,</span><span class="nx">c</span><span class="p">,</span><span class="nx">k</span><span class="p">);</span><span class="nx">e</span><span class="o">?</span><span class="s2">&quot;post&quot;</span><span class="o">!==</span><span class="nx">a</span><span class="o">||</span><span class="nx">i</span><span class="p">[</span><span class="nx">f</span><span class="p">.</span><span class="nx">restangularFields</span><span class="p">.</span><span class="nx">restangularCollection</span><span class="p">]</span><span class="o">?</span><span class="nx">o</span><span class="p">(</span><span class="nx">k</span><span class="p">,</span><span class="nx">c</span><span class="p">,</span><span class="nx">s</span><span class="p">(</span><span class="nx">i</span><span class="p">[</span><span class="nx">f</span><span class="p">.</span><span class="nx">restangularFields</span><span class="p">.</span><span class="nx">parentResource</span><span class="p">],</span><span class="nx">e</span><span class="p">,</span><span class="nx">i</span><span class="p">[</span><span class="nx">f</span><span class="p">.</span><span class="nx">restangularFields</span><span class="p">.</span><span class="nx">route</span><span class="p">]))</span><span class="o">:</span><span class="nx">o</span><span class="p">(</span><span class="nx">k</span><span class="p">,</span><span class="nx">c</span><span class="p">,</span><span class="nx">s</span><span class="p">(</span><span class="nx">i</span><span class="p">,</span><span class="nx">e</span><span class="p">,</span><span class="nx">b</span><span class="p">))</span><span class="o">:</span><span class="nx">o</span><span class="p">(</span><span class="nx">k</span><span class="p">,</span><span class="nx">c</span><span class="p">,</span><span class="k">void</span> <span class="mi">0</span><span class="p">)},</span><span class="nx">w</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="nx">f</span><span class="p">.</span><span class="nx">errorInterceptor</span><span class="p">(</span><span class="nx">a</span><span class="p">)</span><span class="o">!==!</span><span class="mi">1</span><span class="o">&amp;&amp;</span><span class="nx">k</span><span class="p">.</span><span class="nx">reject</span><span class="p">(</span><span class="nx">a</span><span class="p">)},</span><span class="nx">x</span><span class="o">=</span><span class="nx">a</span><span class="p">,</span><span class="nx">y</span><span class="o">=</span><span class="nx">_</span><span class="p">.</span><span class="nx">extend</span><span class="p">({},</span><span class="nx">t</span><span class="p">.</span><span class="nx">headers</span><span class="p">),</span><span class="nx">z</span><span class="o">=</span><span class="nx">f</span><span class="p">.</span><span class="nx">isOverridenMethod</span><span class="p">(</span><span class="nx">a</span><span class="p">);</span><span class="k">return</span> <span class="nx">z</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="nx">x</span><span class="o">=</span><span class="s2">&quot;post&quot;</span><span class="p">,</span><span class="nx">y</span><span class="o">=</span><span class="nx">_</span><span class="p">.</span><span class="nx">extend</span><span class="p">(</span><span class="nx">y</span><span class="p">,{</span><span class="s2">&quot;X-HTTP-Method-Override&quot;</span><span class="o">:</span><span class="s2">&quot;remove&quot;</span><span class="o">===</span><span class="nx">a</span><span class="o">?</span><span class="s2">&quot;DELETE&quot;</span><span class="o">:</span><span class="nx">a</span><span class="p">})),</span><span class="nx">f</span><span class="p">.</span><span class="nx">isSafe</span><span class="p">(</span><span class="nx">a</span><span class="p">)</span><span class="o">?</span><span class="nx">z</span><span class="o">?</span><span class="nx">K</span><span class="p">.</span><span class="nx">resource</span><span class="p">(</span><span class="k">this</span><span class="p">,</span><span class="nx">c</span><span class="p">,</span><span class="nx">y</span><span class="p">,</span><span class="nx">t</span><span class="p">.</span><span class="nx">params</span><span class="p">,</span><span class="nx">b</span><span class="p">,</span><span class="nx">j</span><span class="p">)[</span><span class="nx">x</span><span class="p">]({}).</span><span class="nx">then</span><span class="p">(</span><span class="nx">u</span><span class="p">,</span><span class="nx">w</span><span class="p">)</span><span class="o">:</span><span class="nx">K</span><span class="p">.</span><span class="nx">resource</span><span class="p">(</span><span class="k">this</span><span class="p">,</span><span class="nx">c</span><span class="p">,</span><span class="nx">y</span><span class="p">,</span><span class="nx">t</span><span class="p">.</span><span class="nx">params</span><span class="p">,</span><span class="nx">b</span><span class="p">,</span><span class="nx">j</span><span class="p">)[</span><span class="nx">x</span><span class="p">]().</span><span class="nx">then</span><span class="p">(</span><span class="nx">u</span><span class="p">,</span><span class="nx">w</span><span class="p">)</span><span class="o">:</span><span class="nx">K</span><span class="p">.</span><span class="nx">resource</span><span class="p">(</span><span class="k">this</span><span class="p">,</span><span class="nx">c</span><span class="p">,</span><span class="nx">y</span><span class="p">,</span><span class="nx">t</span><span class="p">.</span><span class="nx">params</span><span class="p">,</span><span class="nx">b</span><span class="p">,</span><span class="nx">j</span><span class="p">)[</span><span class="nx">x</span><span class="p">](</span><span class="nx">t</span><span class="p">.</span><span class="nx">element</span><span class="p">).</span><span class="nx">then</span><span class="p">(</span><span class="nx">u</span><span class="p">,</span><span class="nx">w</span><span class="p">),</span><span class="nx">l</span><span class="p">(</span><span class="nx">k</span><span class="p">.</span><span class="nx">promise</span><span class="p">)}</span><span class="kd">function</span> <span class="nx">y</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">b</span><span class="p">){</span><span class="k">return</span> <span class="nx">_</span><span class="p">.</span><span class="nx">bind</span><span class="p">(</span><span class="nx">x</span><span class="p">,</span><span class="k">this</span><span class="p">)(</span><span class="s2">&quot;get&quot;</span><span class="p">,</span><span class="k">void</span> <span class="mi">0</span><span class="p">,</span><span class="nx">a</span><span class="p">,</span><span class="k">void</span> <span class="mi">0</span><span class="p">,</span><span class="nx">b</span><span class="p">)}</span><span class="kd">function</span> <span class="nx">z</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">b</span><span class="p">){</span><span class="k">return</span> <span class="nx">_</span><span class="p">.</span><span class="nx">bind</span><span class="p">(</span><span class="nx">x</span><span class="p">,</span><span class="k">this</span><span class="p">)(</span><span class="s2">&quot;remove&quot;</span><span class="p">,</span><span class="k">void</span> <span class="mi">0</span><span class="p">,</span><span class="nx">a</span><span class="p">,</span><span class="k">void</span> <span class="mi">0</span><span class="p">,</span><span class="nx">b</span><span class="p">)}</span><span class="kd">function</span> <span class="nx">A</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">b</span><span class="p">){</span><span class="k">return</span> <span class="nx">_</span><span class="p">.</span><span class="nx">bind</span><span class="p">(</span><span class="nx">x</span><span class="p">,</span><span class="k">this</span><span class="p">)(</span><span class="s2">&quot;put&quot;</span><span class="p">,</span><span class="k">void</span> <span class="mi">0</span><span class="p">,</span><span class="nx">a</span><span class="p">,</span><span class="k">void</span> <span class="mi">0</span><span class="p">,</span><span class="nx">b</span><span class="p">)}</span><span class="kd">function</span> <span class="nx">B</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">b</span><span class="p">,</span><span class="nx">c</span><span class="p">,</span><span class="nx">d</span><span class="p">){</span><span class="k">return</span> <span class="nx">_</span><span class="p">.</span><span class="nx">bind</span><span class="p">(</span><span class="nx">x</span><span class="p">,</span><span class="k">this</span><span class="p">)(</span><span class="s2">&quot;post&quot;</span><span class="p">,</span><span class="nx">a</span><span class="p">,</span><span class="nx">c</span><span class="p">,</span><span class="nx">b</span><span class="p">,</span><span class="nx">d</span><span class="p">)}</span><span class="kd">function</span> <span class="nx">C</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">b</span><span class="p">){</span><span class="k">return</span> <span class="nx">_</span><span class="p">.</span><span class="nx">bind</span><span class="p">(</span><span class="nx">x</span><span class="p">,</span><span class="k">this</span><span class="p">)(</span><span class="s2">&quot;head&quot;</span><span class="p">,</span><span class="k">void</span> <span class="mi">0</span><span class="p">,</span><span class="nx">a</span><span class="p">,</span><span class="k">void</span> <span class="mi">0</span><span class="p">,</span><span class="nx">b</span><span class="p">)}</span><span class="kd">function</span> <span class="nx">D</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">b</span><span class="p">){</span><span class="k">return</span> <span class="nx">_</span><span class="p">.</span><span class="nx">bind</span><span class="p">(</span><span class="nx">x</span><span class="p">,</span><span class="k">this</span><span class="p">)(</span><span class="s2">&quot;trace&quot;</span><span class="p">,</span><span class="k">void</span> <span class="mi">0</span><span class="p">,</span><span class="nx">a</span><span class="p">,</span><span class="k">void</span> <span class="mi">0</span><span class="p">,</span><span class="nx">b</span><span class="p">)}</span><span class="kd">function</span> <span class="nx">E</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">b</span><span class="p">){</span><span class="k">return</span> <span class="nx">_</span><span class="p">.</span><span class="nx">bind</span><span class="p">(</span><span class="nx">x</span><span class="p">,</span><span class="k">this</span><span class="p">)(</span><span class="s2">&quot;options&quot;</span><span class="p">,</span><span class="k">void</span> <span class="mi">0</span><span class="p">,</span><span class="nx">a</span><span class="p">,</span><span class="k">void</span> <span class="mi">0</span><span class="p">,</span><span class="nx">b</span><span class="p">)}</span><span class="kd">function</span> <span class="nx">F</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">b</span><span class="p">,</span><span class="nx">c</span><span class="p">){</span><span class="k">return</span> <span class="nx">_</span><span class="p">.</span><span class="nx">bind</span><span class="p">(</span><span class="nx">x</span><span class="p">,</span><span class="k">this</span><span class="p">)(</span><span class="s2">&quot;patch&quot;</span><span class="p">,</span><span class="k">void</span> <span class="mi">0</span><span class="p">,</span><span class="nx">b</span><span class="p">,</span><span class="nx">a</span><span class="p">,</span><span class="nx">c</span><span class="p">)}</span><span class="kd">function</span> <span class="nx">G</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">b</span><span class="p">,</span><span class="nx">c</span><span class="p">,</span><span class="nx">d</span><span class="p">,</span><span class="nx">e</span><span class="p">){</span><span class="k">return</span> <span class="nx">_</span><span class="p">.</span><span class="nx">bind</span><span class="p">(</span><span class="nx">x</span><span class="p">,</span><span class="k">this</span><span class="p">)(</span><span class="nx">a</span><span class="p">,</span><span class="nx">b</span><span class="p">,</span><span class="nx">c</span><span class="p">,</span><span class="nx">e</span><span class="p">,</span><span class="nx">d</span><span class="p">)}</span><span class="kd">function</span> <span class="nx">H</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">b</span><span class="p">,</span><span class="nx">c</span><span class="p">,</span><span class="nx">d</span><span class="p">,</span><span class="nx">e</span><span class="p">,</span><span class="nx">g</span><span class="p">){</span><span class="kd">var</span> <span class="nx">h</span><span class="p">;</span><span class="nx">h</span><span class="o">=</span><span class="s2">&quot;getList&quot;</span><span class="o">===</span><span class="nx">b</span><span class="o">?</span><span class="nx">_</span><span class="p">.</span><span class="nx">bind</span><span class="p">(</span><span class="nx">w</span><span class="p">,</span><span class="k">this</span><span class="p">,</span><span class="nx">c</span><span class="p">)</span><span class="o">:</span><span class="nx">_</span><span class="p">.</span><span class="nx">bind</span><span class="p">(</span><span class="nx">G</span><span class="p">,</span><span class="k">this</span><span class="p">,</span><span class="nx">b</span><span class="p">,</span><span class="nx">c</span><span class="p">);</span><span class="kd">var</span> <span class="nx">i</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">b</span><span class="p">,</span><span class="nx">c</span><span class="p">){</span><span class="kd">var</span> <span class="nx">f</span><span class="o">=</span><span class="nx">_</span><span class="p">.</span><span class="nx">defaults</span><span class="p">({</span><span class="nx">params</span><span class="o">:</span><span class="nx">a</span><span class="p">,</span><span class="nx">headers</span><span class="o">:</span><span class="nx">b</span><span class="p">,</span><span class="nx">elem</span><span class="o">:</span><span class="nx">c</span><span class="p">},{</span><span class="nx">params</span><span class="o">:</span><span class="nx">d</span><span class="p">,</span><span class="nx">headers</span><span class="o">:</span><span class="nx">e</span><span class="p">,</span><span class="nx">elem</span><span class="o">:</span><span class="nx">g</span><span class="p">});</span><span class="k">return</span> <span class="nx">h</span><span class="p">(</span><span class="nx">f</span><span class="p">.</span><span class="nx">params</span><span class="p">,</span><span class="nx">f</span><span class="p">.</span><span class="nx">headers</span><span class="p">,</span><span class="nx">f</span><span class="p">.</span><span class="nx">elem</span><span class="p">)};</span><span class="k">this</span><span class="p">[</span><span class="nx">a</span><span class="p">]</span><span class="o">=</span><span class="nx">f</span><span class="p">.</span><span class="nx">isSafe</span><span class="p">(</span><span class="nx">b</span><span class="p">)</span><span class="o">?</span><span class="nx">i</span><span class="o">:</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">b</span><span class="p">,</span><span class="nx">c</span><span class="p">){</span><span class="k">return</span> <span class="nx">i</span><span class="p">(</span><span class="nx">b</span><span class="p">,</span><span class="nx">c</span><span class="p">,</span><span class="nx">a</span><span class="p">)}}</span><span class="kd">function</span> <span class="nx">I</span><span class="p">(</span><span class="nx">c</span><span class="p">){</span><span class="kd">var</span> <span class="nx">d</span><span class="o">=</span><span class="nx">angular</span><span class="p">.</span><span class="nx">copy</span><span class="p">(</span><span class="nx">b</span><span class="p">);</span><span class="k">return</span> <span class="nx">a</span><span class="p">.</span><span class="nx">init</span><span class="p">(</span><span class="nx">d</span><span class="p">,</span><span class="nx">d</span><span class="p">),</span><span class="nx">c</span><span class="p">(</span><span class="nx">d</span><span class="p">),</span><span class="nx">e</span><span class="p">(</span><span class="nx">d</span><span class="p">)}</span><span class="kd">var</span> <span class="nx">J</span><span class="o">=</span><span class="p">{},</span><span class="nx">K</span><span class="o">=</span><span class="k">new</span> <span class="nx">f</span><span class="p">.</span><span class="nx">urlCreatorFactory</span><span class="p">[</span><span class="nx">f</span><span class="p">.</span><span class="nx">urlCreator</span><span class="p">];</span><span class="k">return</span> <span class="nx">K</span><span class="p">.</span><span class="nx">setConfig</span><span class="p">(</span><span class="nx">f</span><span class="p">),</span><span class="nx">a</span><span class="p">.</span><span class="nx">init</span><span class="p">(</span><span class="nx">J</span><span class="p">,</span><span class="nx">f</span><span class="p">),</span><span class="nx">J</span><span class="p">.</span><span class="nx">copy</span><span class="o">=</span><span class="nx">_</span><span class="p">.</span><span class="nx">bind</span><span class="p">(</span><span class="nx">r</span><span class="p">,</span><span class="nx">J</span><span class="p">),</span><span class="nx">J</span><span class="p">.</span><span class="nx">withConfig</span><span class="o">=</span><span class="nx">_</span><span class="p">.</span><span class="nx">bind</span><span class="p">(</span><span class="nx">I</span><span class="p">,</span><span class="nx">J</span><span class="p">),</span><span class="nx">J</span><span class="p">.</span><span class="nx">one</span><span class="o">=</span><span class="nx">_</span><span class="p">.</span><span class="nx">bind</span><span class="p">(</span><span class="nx">h</span><span class="p">,</span><span class="nx">J</span><span class="p">,</span><span class="kc">null</span><span class="p">),</span><span class="nx">J</span><span class="p">.</span><span class="nx">all</span><span class="o">=</span><span class="nx">_</span><span class="p">.</span><span class="nx">bind</span><span class="p">(</span><span class="nx">i</span><span class="p">,</span><span class="nx">J</span><span class="p">,</span><span class="kc">null</span><span class="p">),</span><span class="nx">J</span><span class="p">.</span><span class="nx">oneUrl</span><span class="o">=</span><span class="nx">_</span><span class="p">.</span><span class="nx">bind</span><span class="p">(</span><span class="nx">j</span><span class="p">,</span><span class="nx">J</span><span class="p">,</span><span class="kc">null</span><span class="p">),</span><span class="nx">J</span><span class="p">.</span><span class="nx">allUrl</span><span class="o">=</span><span class="nx">_</span><span class="p">.</span><span class="nx">bind</span><span class="p">(</span><span class="nx">k</span><span class="p">,</span><span class="nx">J</span><span class="p">,</span><span class="kc">null</span><span class="p">),</span><span class="nx">J</span><span class="p">.</span><span class="nx">restangularizeElement</span><span class="o">=</span><span class="nx">_</span><span class="p">.</span><span class="nx">bind</span><span class="p">(</span><span class="nx">s</span><span class="p">,</span><span class="nx">J</span><span class="p">),</span><span class="nx">J</span><span class="p">.</span><span class="nx">restangularizeCollection</span><span class="o">=</span><span class="nx">_</span><span class="p">.</span><span class="nx">bind</span><span class="p">(</span><span class="nx">t</span><span class="p">,</span><span class="nx">J</span><span class="p">),</span><span class="nx">J</span><span class="p">}</span><span class="k">return</span> <span class="nx">e</span><span class="p">(</span><span class="nx">b</span><span class="p">)}]})}();</span></div></pre></div>
            </td>
          </tr>
        </table>
  </div>

  </div>
</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" class="js-jump-to-line" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" class="js-jump-to-line-form">
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="button">Go</button>
  </form>
</div>

        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer">
    <ul class="site-footer-links right">
      <li><a href="https://status.github.com/">Status</a></li>
      <li><a href="http://developer.github.com">API</a></li>
      <li><a href="http://training.github.com">Training</a></li>
      <li><a href="http://shop.github.com">Shop</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/about">About</a></li>

    </ul>

    <a href="/">
      <span class="mega-octicon octicon-mark-github"></span>
    </a>

    <ul class="site-footer-links">
      <li>&copy; 2013 <span title="0.03268s from github-fe119-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="/site/terms">Terms</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
  </div><!-- /.site-footer -->
</div><!-- /.container -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-fullscreen-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="js-fullscreen-contents" placeholder="" data-suggester="fullscreen_suggester"></textarea>
          <div class="suggester-container">
              <div class="suggester fullscreen-suggester js-navigation-container" id="fullscreen_suggester"
                 data-url="/mgonto/restangular/suggestions/commit">
              </div>
          </div>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped leftwards" title="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped leftwards"
      title="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-remove-close close ajax-error-dismiss"></a>
      Something went wrong with that request. Please try again.
    </div>

  </body>
</html>


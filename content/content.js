emp.$watch('settings', function (settings) {
    emp.youtube_url = '//www.youtube';

    if ('privacy_enhanced' in settings && settings.privacy_enhanced)
        emp.youtube_url += '-nocookie';

    emp.youtube_url += '.com/embed/'+settings.video_id+'?';

    if ('suggested_video' in settings && settings.suggested_video)
        emp.youtube_url += 'rel=0&amp;';

    if ('player_controls' in settings && settings.player_controls)
        emp.youtube_url += 'controls=0&amp;';

    if ('video_title_player_actions' in settings && settings.video_title_player_actions)
        emp.youtube_url += 'showinfo=0';
});
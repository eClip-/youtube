$scope.$watch('settings', function (settings) {
    console.log(settings);
    $scope.youtube_url = '//www.youtube';

    if ('privacy_enhanced' in settings && settings.privacy_enhanced)
        $scope.youtube_url += '-nocookie';

    $scope.youtube_url += '.com/embed/'+settings.video_id+'?';

    if ('suggested_video' in settings && settings.suggested_video)
        $scope.youtube_url += 'rel=0&amp;';

    if ('player_controls' in settings && settings.player_controls)
        $scope.youtube_url += 'controls=0&amp;';

    if ('video_title_player_actions' in settings && settings.video_title_player_actions)
        $scope.youtube_url += 'showinfo=0';
});
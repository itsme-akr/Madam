
    const names = ["My Wifey", "Madam Jii", "Meri Jaan", "Mera Cutuu","Biwi Jii", "Meri Radhe"];
    let currentNameIndex = 0;

    function nextName() {
    currentNameIndex = (currentNameIndex + 1) % names.length;
    document.getElementById('dynamic-name').textContent = names[currentNameIndex];
    document.getElementById('dynamic-name-2').textContent = names[currentNameIndex];
    document.getElementById('dynamic-name-3').textContent = names[currentNameIndex];
    }

    function stopAllSongs(){
        for (let i=1; i<=10; i++){
            const audioElement = document.getElementById(`song${i}`);
            audioElement.pause();
            audioElement.currentTime = 0;

        }

        const buttonAudio = document.getElementById(`buttonSong`);
        buttonAudio.pause();
        buttonAudio.currentTime = 0;
    }

    function playSong(songNumber){
        stopAllSongs();
        const songElement = document.getElementById(`song${songNumber}`);
        songElement.volume = 1.0;
        songElement.play();
        }


        function launchConfetti() {
            var duration = 4 * 1000;  // Confetti duration in milliseconds
            var end = Date.now() + duration;
    
            (function frame() {
                // Launch confetti from different angles
                confetti({
                    particleCount: 3,
                    angle: 60,
                    spread: 55,
                    origin: { x: 0, y:0.7 }
                });
                confetti({
                    particleCount: 3,
                    angle: 120,
                    spread: 55,
                    origin: { x: 1, y:0.7 }
                });
    
                if (Date.now() < end) {
                    requestAnimationFrame(frame);
                }
            }());
        };


    function playButtonSong(){
        stopAllSongs();
        const buttonSongElement = document.getElementById(`buttonSong`);
        buttonSongElement.volume = 1.0;
        buttonSongElement.play();
        launchConfetti();
        nextName();
    }

    // confetti

    
    

    window.onload = function(){
        launchConfetti();
    };

    // document.getElementById("confettiButton").addEventListener('click',function(){
    //     launchConfetti();

    // });

    


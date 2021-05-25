package journlr.journlr;

import java.util.ArrayList;

import com.wrapper.spotify.SpotifyApi;
import com.wrapper.spotify.model_objects.specification.Paging;
import com.wrapper.spotify.model_objects.specification.Track;
import com.wrapper.spotify.requests.data.search.simplified.SearchTracksRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RestControl {

    @Autowired
    private SpotifyApi spotifyApi;

    @GetMapping("/songSearch/{search}")
    public Track[] songSearch(@PathVariable("search") String search) {
        
        Paging<Track> trackPaging = null;
        SearchTracksRequest searchTracksRequest = spotifyApi.searchTracks(search).limit(10).build();
        try {
            trackPaging = searchTracksRequest.execute();
        } catch (Exception e) {
            System.out.println("Error " + e.getMessage());
        }
        System.out.println("number of tracks" + trackPaging.getTotal());
        System.out.println(trackPaging.getLimit());
        
        return trackPaging.getItems();
    }

}
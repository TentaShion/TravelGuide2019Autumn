package work.shion.travelguide2019autumn;

import android.content.Intent;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.view.View;

public class EntryPointActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_entry_point);

        findViewById(R.id.button).setOnClickListener((View v) -> {
            Intent intent = new Intent(EntryPointActivity.this, MainActivity.class);
            startActivity(intent);
        });
    }
}

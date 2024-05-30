<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Project;

class ProjectController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'required|string|max:5000',
            'url' => 'required|url',
            'image' => 'nullable|url',
            'category' => 'required|string',
        ]);

        Project::create([
            'name' => $request->name,
            'description' => $request->description,
            'url' => $request->url,
            'image' => $request->image,
            'category' => $request->category,
        ]);

        return redirect()->route('project.index')->with('success', 'Project created successfully!');
    }

    public function index()
    {
        $projects = Project::all();
        return inertia('Project/Index', [
            'projects' => $projects
        ]);
    }
}
